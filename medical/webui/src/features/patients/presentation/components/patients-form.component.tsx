import { Button, Input, LoadingProccessBar, Select } from '@core';
import { GenderSelectValues } from '@core/constants';
import { PlusIcon } from '@core/presentation/components/icons';
import { addPatient, getPatientById, updatePatient } from '@features/patients/services';
import type { PatientFormType } from '@features/patients/types';
import { PatientFormConfig } from '@features/patients/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useSliceField } from '@store';
import { useEffect } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

interface Props {
	patientId?: string;
	onSuccess?: () => void;
	mode: 'add' | 'edit';
}

export const PatientForm = ({ patientId, onSuccess, mode }: Props) => {
	const form = useForm<PatientFormType>({
		defaultValues: PatientFormConfig.defaultValues,
		resolver: zodResolver(PatientFormConfig.schema),
	});

	const dispatch = useAppDispatch();
	const isLoadingAdd = useSliceField('patientsSlice', 'loadings', 'addPatient');
	const isLoadingUpdate = useSliceField('patientsSlice', 'loadings', 'updatePatient');
	const isLoadingGet = useSliceField('patientsSlice', 'loadings', 'getPatientById');
	const isLoading = isLoadingAdd || isLoadingUpdate;

	useEffect(() => {
		if (mode === 'edit' && patientId) {
			dispatch(getPatientById({ id: patientId }))
				.unwrap()
				.then((response) => {
					if (response.data) {
						form.reset(response.data);
					}
				})
				.catch(() => {});
		} else if (mode === 'add') {
			form.reset(PatientFormConfig.defaultValues);
		}
	}, [mode, patientId]);

	const { register, formState, control, setValue } = form;

	const handleSubmit = () => {
		const values = form.getValues();
		const action = mode === 'add' ? addPatient(values) : updatePatient(values);
		dispatch(action)
			.unwrap()
			.then(() => {
				form.reset();
				onSuccess?.();
			})
			.catch(() => {});
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
					{mode === 'add' ? 'Добавление нового пациента' : 'Редактирование пациента'}
				</p>
				<div className="flex h-full w-full flex-col gap-[20px]">
					<Input
						{...register('fio')}
						label={formState.errors.fio?.message || 'Фамилия Имя Отчество'}
						id="fio"
						classNames={{
							inputClassName: 'w-full ',
							wrapperClassName: 'w-full  ',
							containerClassName: 'bg-[#F5F5F5] h-[40px]',
							labelClassName: formState.errors.fio?.message && 'text-error',
						}}
						placeholder="Введите данные"
					/>
					<div className="flex h-fit w-full justify-between gap-[20px]">
						<Controller
							control={control}
							name="gender"
							render={({ field }) => (
								<Select
									{...field}
									buttonClassName="bg-[#F5F5F5] h-[40px] rounded-primary text-[20px] ring-[#F5F5F5] ring-outline border-none"
									wrapperClassname="w-full border-[#F5F5F5] h-[40px] border-none ring-[#F5F5F5]"
									optionsClassName="ring-[#F5F5F5]"
									className="border-[#F5F5F5]"
									options={GenderSelectValues}
									value={field.value ?? true}
									disableDefaultValue
									label={formState.errors.gender?.message || 'Пол'}
									labelClassName={
										formState.errors.gender?.message && 'text-error'
									}
									onChange={field.onChange}
									buttonLabelClassName="text-primary text-[20px]"
								/>
							)}
						/>{' '}
						<Input
							{...register('dateOfBirth')}
							label={formState.errors.dateOfBirth?.message || 'Дата рождения'}
							id="dateOfBirth"
							placeholder="ДД.ММ.ГГГГ"
							classNames={{
								inputClassName: 'w-full  h-[40px] ',
								wrapperClassName: 'w-full  ',
								containerClassName: 'bg-[#F5F5F5]  h-[40px]		',
								labelClassName:
									formState.errors.dateOfBirth?.message && 'text-error',
							}}
						/>
					</div>

					<Input
						{...register('phoneNumber')}
						label={formState.errors.phoneNumber?.message || 'Номер телефона'}
						id="phoneNumber"
						classNames={{
							inputClassName: 'w-full ',
							wrapperClassName: 'w-full ',
							containerClassName: 'bg-[#F5F5F5]  h-[40px]',
							labelClassName: formState.errors.phoneNumber?.message && 'text-error',
						}}
						placeholder="Введите номер"
					/>
					<Input
						{...register('email')}
						label={formState.errors.email?.message || 'Email'}
						id="email"
						classNames={{
							inputClassName: 'w-full ',
							wrapperClassName: 'w-full ',
							containerClassName: 'bg-[#F5F5F5]  h-[40px]',
							labelClassName: formState.errors.email?.message && 'text-error',
						}}
						placeholder="Введите email"
					/>
					<Input
						{...register('livingAdress')}
						label={formState.errors.livingAdress?.message || 'Адрес проживания'}
						id="adress"
						classNames={{
							inputClassName: 'w-full  h-[40px]',
							wrapperClassName: 'w-full  ',
							containerClassName: 'bg-[#F5F5F5] h-[40px]',
							labelClassName: formState.errors.livingAdress?.message && 'text-error',
						}}
						placeholder="Введите адрес"
					/>

					{/* <Input
						{...register('chronicDiseaseData')}
						label="Хронические заболевания, аллергии"
						id="chronicDiseaseData"
						placeholder="Введите информацию"
						classNames={{
							inputClassName: 'w-full  h-[50px]',
							wrapperClassName: 'w-full ',
							containerClassName: 'bg-[#F5F5F5]',
						}}
						errorMessage={formState.errors.chronicDiseaseData?.message}
					/> */}
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
