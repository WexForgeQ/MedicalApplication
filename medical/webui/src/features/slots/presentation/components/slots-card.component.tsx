import {
	Button,
	HumanEntityCardEmpty,
	HumanEntityCardInfo,
	HumanEntityCardTitle,
	Input,
	LoadingProccessBar,
	Select,
} from '@core';
import { convertToSelectValues, phoneMask } from '@core/constants';
import { PlusIcon } from '@core/presentation/components/icons';
import { format, useAppNavigate } from '@core/utils';
import { getSpecializations } from '@features/home';
import { getPatients } from '@features/patients/services';
import { SlotStatusNames } from '@features/slots/constants/slots-names.constants';
import { deleteAppointment, getSlotById, makeAppointment } from '@features/slots/services';
import type { AppointmentFormType } from '@features/slots/types';
import { AppointmentTypeSelectValues, type Slot } from '@features/slots/types';
import { AppointmentFormConfig } from '@features/slots/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMask } from '@react-input/mask';
import { useAppDispatch, useSliceField } from '@store';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

interface Props {
	slotId?: string | null;
	onEdit?: (id: string) => void;
	onDelete?: (id: string) => void;
	appointmentMode?: boolean;
}

export const SlotCard = ({ slotId, onEdit, onDelete, appointmentMode = false }: Props) => {
	const dispatch = useAppDispatch();
	const navigate = useAppNavigate();
	const [search] = useSearchParams();
	const [slot, setSlot] = useState<Slot | null>(null);
	const isLoading = useSliceField('slotsSlice', 'loadings', 'getSlotById');

	const form = useForm<AppointmentFormType>({
		defaultValues: AppointmentFormConfig.defaultValues,
		resolver: zodResolver(AppointmentFormConfig.schema),
	});

	const [specializations, setSpecializations] = useState<Array<{ label: string; value: string }>>(
		[],
	);

	const phoneRef = useMask(phoneMask);

	useEffect(() => {
		if (slotId) {
			dispatch(getSlotById({ id: slotId }))
				.unwrap()
				.then((response) => {
					setSlot(response.data || null);
				})
				.catch(() => {
					setSlot(null);
				});
		} else {
			setSlot(null);
		}
	}, [slotId]);

	useEffect(() => {
		dispatch(getSpecializations({ pageNumber: 1, pageSize: 1000 }))
			.unwrap()
			.then((response) => {
				const options = convertToSelectValues(response.data?.items);
				if (options) setSpecializations(options);
			})
			.catch(() => {});
	}, []);

	if (isLoading) {
		return (
			<div className="flex h-full w-full max-w-[500px] flex-col items-center justify-center rounded-primary bg-white px-[40px] py-[25px]">
				<LoadingProccessBar bgClassName="w-full max-w-[300px]" />
			</div>
		);
	}

	const handleMakeAppointment = () => {
		dispatch(
			makeAppointment({
				appointmentType: form.getValues('appointmentType'),
				slotId: slotId!,
				userId: form.getValues('userId'),
			}),
		)
			.unwrap()
			.then((res) => {
				navigate('', search.get('day') ? { day: search.get('day')! } : {});
			});
	};

	const handleDeleteAppointment = (id: string) => {
		dispatch(
			deleteAppointment({
				id: id,
			}),
		)
			.unwrap()
			.then((res) => {
				navigate('', search.get('day') ? { day: search.get('day')! } : {});
			})
			.catch(() => {});
	};

	const handleGetUser = () => {
		dispatch(
			getPatients({
				pageNumber: 1,
				pageSize: 999,
				phoneNumber: form.getValues('phoneNumber'),
			}),
		)
			.unwrap()
			.then((res) => {
				if (res.data?.items[0])
					form.reset({
						phoneNumber: res.data?.items[0].phoneNumber,
						userId: res.data?.items[0].id,
						userName: res.data?.items[0].fio,
					});
			});
	};

	return (
		<div className="flex h-full w-full max-w-[500px] flex-col items-center rounded-primary bg-white px-[40px] py-[25px]">
			{slot ? (
				<div className="flex h-full w-full flex-col items-center gap-[10px]">
					<div className="flex w-full items-center justify-center gap-[30px] text-[22px] text-primary">
						<p>{format(slot.date, 'dd.MM.yyyy')}</p>
						<p>{slot.time}</p>
					</div>

					{!appointmentMode && (
						<div className="flex w-full items-center justify-center gap-[10px] text-[14px] font-normal text-primary">
							<p className="text-textGray">Статус:</p>
							<p>{SlotStatusNames[slot.status]}</p>
						</div>
					)}

					<div className="flex w-full items-center justify-center gap-[10px] text-[14px] font-normal text-primary">
						<p className="text-primary">Врач</p>
					</div>

					<div className="flex h-fit w-full flex-col items-center">
						<label className="cursor-pointer">
							<div className="flex size-[85px] items-center justify-center overflow-hidden rounded-full bg-primary">
								<img
									src={slot.doctor.photoUrl}
									alt="Фото"
									className="h-full w-full rounded-full object-cover"
								/>
							</div>
						</label>
					</div>

					<div className="flex h-fit w-full flex-col items-center gap-[30px]">
						<div className="flex h-fit w-full flex-col items-center gap-[15px]">
							<HumanEntityCardTitle
								humanEntity={slot.doctor}
								showDateOfBirth={false}
							/>
						</div>
						<HumanEntityCardInfo humanEntity={slot.doctor} showAdress={false} />
					</div>

					<div className="flex w-full items-center justify-center gap-[10px] text-[14px] font-normal text-primary">
						<p className="text-primary">Пациент</p>
					</div>

					{appointmentMode ? (
						slot.patient ? (
							<div className="flex w-full flex-col items-center gap-[30px]">
								<div className="flex size-full w-full flex-col items-center gap-[30px]">
									<div className="flex h-fit w-full flex-col items-center gap-[15px]">
										<HumanEntityCardTitle humanEntity={slot.patient} />
									</div>
									<HumanEntityCardInfo
										humanEntity={slot.patient}
										showAdress={false}
									/>
								</div>

								<Button
									onClick={() => handleDeleteAppointment(slot.appoitnmentId!)}
									className="mt-auto w-[200px] bg-red-500 text-white hover:bg-red-600"
								>
									Удалить запись
								</Button>
							</div>
						) : (
							<div className="flex w-full flex-col items-center gap-[5px]">
								<Input
									ref={phoneRef}
									label={
										form.formState.errors.phoneNumber?.message ||
										'Номер телефона'
									}
									value={form.watch('phoneNumber')}
									onChange={(e) => {
										form.setValue(`phoneNumber`, e.target.value);
									}}
									onBlur={() => {
										form.trigger('phoneNumber').then((isValid) => {
											setTimeout(() => {
												if (
													isValid &&
													!form.formState.errors.phoneNumber?.message
												) {
													handleGetUser();
												}
											}, 0);
										});
									}}
									id="phoneNumber"
									classNames={{
										inputClassName: 'w-full h-[40px]',
										wrapperClassName: 'w-full',
										containerClassName: 'bg-[#F5F5F5] h-[40px]',
									}}
									placeholder="Введите номер"
								/>

								{!form.formState.errors.phoneNumber?.message &&
									(form.watch('userId') ? (
										<div className="flex flex-col justify-start gap-2">
											<p className="w-full text-[#3A974C]">
												Пациент найден в системе
											</p>
											<p className="w-full text-primary">
												{form.watch('userName')?.toUpperCase()}
											</p>
										</div>
									) : (
										<p className="w-full text-error">Пользователь не найден</p>
									))}

								<Controller
									control={form.control}
									name="appointmentType"
									render={({ field }) => (
										<Select
											{...field}
											buttonClassName="bg-[#F5F5F5] h-[40px] rounded-primary text-[20px] ring-[#F5F5F5] ring-outline border-none"
											wrapperClassname="w-full border-[#F5F5F5] h-[40px] border-none ring-[#F5F5F5]"
											optionsClassName="ring-[#F5F5F5]"
											className="border-[#F5F5F5]"
											options={AppointmentTypeSelectValues}
											value={field.value ?? true}
											error={form.formState.errors.appointmentType?.message}
											label={'Тип посещения'}
											onChange={field.onChange}
											buttonLabelClassName="text-primary text-[20px]"
										/>
									)}
								/>

								<Button
									onClick={() => form.handleSubmit(handleMakeAppointment)()}
									className="mt-[100px] w-[150px]"
								>
									<PlusIcon />
									Записать
								</Button>
							</div>
						)
					) : (
						slot.patient && (
							<div className="flex size-full w-full flex-col items-center gap-[30px]">
								<div className="flex h-fit w-full flex-col items-center gap-[15px]">
									<HumanEntityCardTitle humanEntity={slot.patient} />
								</div>
								<HumanEntityCardInfo
									humanEntity={slot.patient}
									showAdress={false}
								/>
							</div>
						)
					)}

					{(onEdit || onDelete) && !appointmentMode && (
						<div className="mt-auto flex w-full justify-center gap-[20px]">
							{onEdit && (
								<Button
									className="w-[140px]"
									onClick={() => slot.id && onEdit(slot.id)}
								>
									Редактировать
								</Button>
							)}
							{onDelete && (
								<Button
									className="w-[140px] bg-red-500 text-white"
									onClick={() => slot.id && onDelete(slot.id)}
								>
									Удалить
								</Button>
							)}
						</div>
					)}
				</div>
			) : (
				<HumanEntityCardEmpty />
			)}
		</div>
	);
};
