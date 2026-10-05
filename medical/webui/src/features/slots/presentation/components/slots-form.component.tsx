import { Button, Input, LoadingProccessBar, Select } from '@core';
import { convertToSelectValues } from '@core/constants/converters';
import { PlusIcon } from '@core/presentation/components/icons';
import { format } from '@core/utils';
import { getSpecializations } from '@features/home';
import { getPersonal } from '@features/personal/services';
import type { Personal } from '@features/personal/types';
import { addSlot, getSlotById, updateSlot } from '@features/slots/services';
import type { SlotFormType } from '@features/slots/types';
import { SlotFormConfig } from '@features/slots/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useSliceField } from '@store';
import { useEffect, useMemo, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
interface Props {
	slotId?: string;
	onSuccess?: () => void;
	mode: 'add' | 'edit';
}
export const SlotForm = ({ slotId, onSuccess, mode }: Props) => {
	const form = useForm<SlotFormType>({
		defaultValues: SlotFormConfig.defaultValues,
		resolver: zodResolver(SlotFormConfig.schema),
	});
	const dispatch = useAppDispatch();
	const isLoadingAdd = useSliceField('slotsSlice', 'loadings', 'addSlot');
	const isLoadingUpdate = useSliceField('slotsSlice', 'loadings', 'updateSlot');
	const isLoadingGet = useSliceField('slotsSlice', 'loadings', 'getSlotById');
	const isLoading = isLoadingAdd || isLoadingUpdate;
	const [specializations, setSpecializations] = useState<Array<{ label: string; value: string }>>(
		[],
	);
	const [doctors, setDoctors] = useState<Personal[]>([]);
	const [offices, setOffices] = useState<string[]>([]);
	const isLoadingSpecializations = useSliceField('homeSlice', 'loadings', 'getSpecializations');
	const isLoadingDoctors = useSliceField('personalSlice', 'loadings', 'getPersonal');
	const specializationId = form.watch('specializationId');
	const office = form.watch('office');
	const doctorId = form.watch('doctorId');

	useEffect(() => {
		dispatch(getSpecializations({ pageNumber: 1, pageSize: 1000 }))
			.unwrap()
			.then((response) => {
				const options = convertToSelectValues(response.data?.items);
				if (options) setSpecializations(options);
			})
			.catch(() => {});
	}, []);

	useEffect(() => {
		dispatch(getPersonal({ pageNumber: 1, pageSize: 1000 }))
			.unwrap()
			.then((response) => {
				if (response.data?.items) {
					setDoctors(response.data.items);
					const uniqueOffices = Array.from(
						new Set(
							response.data.items
								.map((d) => d.office)
								.filter((o: string | null | undefined): o is string => !!o),
						),
					);
					setOffices(uniqueOffices);
				}
			})
			.catch(() => {});
	}, []);

	useEffect(() => {
		if (mode === 'edit' && slotId) {
			dispatch(getSlotById({ id: slotId }))
				.unwrap()
				.then((response) => {
					if (response.data) {
						const slot = response.data;
						const dateStr = format(slot.date, 'yyyy-MM-dd');
						form.reset({
							id: slot.id,
							doctorId: slot.doctor.id || '',
							specializationId: slot.doctor.speciality?.id || '',
							office: slot.doctor.office || '',
							date: dateStr,
							time: slot.time,
						});
					}
				})
				.catch(() => {});
		} else if (mode === 'add') {
			form.reset(SlotFormConfig.defaultValues);
		}
	}, [mode, slotId]);

	const filteredDoctors = useMemo(() => {
		return doctors.filter((d) => {
			const matchSpec = specializationId ? d.speciality?.id === specializationId : true;
			const matchOffice = office ? d.office === office : true;
			return matchSpec && matchOffice;
		});
	}, [doctors, specializationId, office]);

	const doctorOptions = useMemo(() => convertToSelectValues(filteredDoctors), [filteredDoctors]);
	const officeOptions = useMemo(() => offices.map((o) => ({ label: o, value: o })), [offices]);

	const handleDoctorChange = (doctorId: string) => {
		form.setValue('doctorId', doctorId);
		const selectedDoctor = doctors.find((d) => d.id === doctorId);
		if (selectedDoctor) {
			form.setValue('specializationId', selectedDoctor.speciality?.id || '');
			form.setValue('office', selectedDoctor.office || '');
		}
	};

	const handleSpecializationChange = (specializationId: string) => {
		form.setValue('specializationId', specializationId);
		form.setValue('doctorId', '');
		form.setValue('office', '');
	};

	const handleOfficeChange = (office: string) => {
		form.setValue('office', office);
		form.setValue('doctorId', '');
	};

	const { register, formState, control } = form;

	const handleSubmit = (values: SlotFormType) => {
		try {
			const { id, ...rest } = values;
			const action = mode === 'add' ? addSlot(rest) : updateSlot({ id, ...rest });

			dispatch(action)
				.unwrap()
				.then(() => {
					form.reset();
					onSuccess?.();
				})
				.catch(() => {});
		} catch (error) {}
	};

	if (mode === 'edit' && isLoadingGet) {
		return (
			<div className="flex h-full w-full max-w-[500px] flex-col items-center justify-center rounded-primary bg-white px-[40px] py-[25px]">
				<LoadingProccessBar bgClassName="w-full max-w-[300px]" />
			</div>
		);
	}
	return (
		<FormProvider {...form}>
			<div className="flex h-full w-full max-w-[500px] flex-col items-center gap-[20px] rounded-primary bg-white px-[40px] py-[25px]">
				<p className="w-full text-center text-[22px] font-semibold text-primaryDark">
					{mode === 'add' ? 'Добавление нового слота' : 'Редактирование слота'}
				</p>
				<div className="flex h-full w-full flex-col gap-[40px]">
					<Controller
						control={control}
						name="doctorId"
						render={({ field }) => (
							<Select
								{...field}
								options={doctorOptions || []}
								value={field.value || ''}
								label={formState.errors.doctorId?.message || 'Врач'}
								labelClassName={formState.errors.doctorId?.message && 'text-error'}
								onChange={handleDoctorChange}
								buttonClassName="bg-[#F5F5F5] h-[40px] rounded-primary text-[20px]"
								wrapperClassname="w-full h-[40px]"
								buttonLabelClassName={
									field.value
										? 'text-primary text-[20px]'
										: 'text-[#555555] text-[20px]'
								}
								disabled={isLoadingDoctors}
							/>
						)}
					/>
					<Controller
						control={control}
						name="specializationId"
						render={({ field }) => (
							<Select
								{...field}
								options={specializations}
								value={field.value || ''}
								label="Специализация"
								onChange={handleSpecializationChange}
								buttonClassName="bg-[#F5F5F5] h-[40px] rounded-primary text-[20px]"
								wrapperClassname="w-full h-[40px]"
								disabled={isLoadingSpecializations}
								buttonLabelClassName={
									field.value
										? 'text-primary text-[20px]'
										: 'text-[#555555] text-[20px]'
								}
							/>
						)}
					/>
					<Controller
						control={control}
						name="office"
						render={({ field }) => (
							<Select
								{...field}
								options={officeOptions}
								value={field.value || ''}
								label="Кабинет"
								onChange={handleOfficeChange}
								buttonClassName="bg-[#F5F5F5] h-[40px] rounded-primary text-[20px]"
								wrapperClassname="w-full h-[40px]"
								buttonLabelClassName={
									field.value
										? 'text-primary text-[20px]'
										: 'text-[#555555] text-[20px]'
								}
							/>
						)}
					/>
					<div className="flex h-fit w-full justify-between gap-[20px]">
						<Input
							{...register('date')}
							label={formState.errors.date?.message || 'Дата'}
							id="date"
							type="date"
							placeholder="ДД:ММ:ГГ"
							errorMessage={formState.errors.date?.message}
							classNames={{
								inputClassName: 'w-full h-[40px] text-center',
								wrapperClassName: 'w-full',
								containerClassName: 'bg-[#F5F5F5] h-[40px]',
								labelClassName: formState.errors.date?.message && 'text-error',
							}}
						/>
						<Input
							{...register('time')}
							label={formState.errors.time?.message || 'Время'}
							id="time"
							type="time"
							placeholder="ЧЧ:ММ"
							errorMessage={formState.errors.time?.message}
							classNames={{
								inputClassName: 'w-full h-[40px]  text-center',
								wrapperClassName: 'w-full',
								containerClassName: 'bg-[#F5F5F5] h-[40px]',
								labelClassName: formState.errors.time?.message && 'text-error',
							}}
						/>
					</div>
				</div>
				<Button
					onClick={() => {
						form.handleSubmit(handleSubmit)();
					}}
					className="w-[165px]"
					disabled={isLoading}
				>
					<PlusIcon />
					{mode === 'add' ? 'Сохранить' : 'Обновить'}
				</Button>
				{isLoading && <LoadingProccessBar bgClassName="w-full" />}
			</div>
		</FormProvider>
	);
};
