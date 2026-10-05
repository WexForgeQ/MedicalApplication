import { Button, Input, LoadingProccessBar, Select } from '@core';
import { GenderSelectValues } from '@core/constants';
import { convertToSelectValues } from '@core/constants/converters';
import { PlusIcon } from '@core/presentation/components/icons';
import { getSpecializations, uploadFile } from '@features/home';
import { addPersonal, getPersonalById, updatePersonal } from '@features/personal/services';
import type { PersonalFormSchemeType } from '@features/personal/utils';
import { PersonalFormConfig } from '@features/personal/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useSliceField } from '@store';
import { useEffect, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

interface Props {
	personalId?: string;
	onSuccess?: () => void;
	mode: 'add' | 'edit';
}

export const PersonalForm = ({ personalId, onSuccess, mode }: Props) => {
	const form = useForm<PersonalFormSchemeType>({
		defaultValues: PersonalFormConfig.defaultValues,
		resolver: zodResolver(PersonalFormConfig.schema),
	});

	const dispatch = useAppDispatch();
	const isLoadingAdd = useSliceField('personalSlice', 'loadings', 'addPersonal');
	const isLoadingUpdate = useSliceField('personalSlice', 'loadings', 'updatePersonal');
	const isLoadingGet = useSliceField('personalSlice', 'loadings', 'getPersonalById');
	const isLoading = isLoadingAdd || isLoadingUpdate;

	const [photoFile, setPhotoFile] = useState<File | null>(null);
	const [photoUrl, setPhotoUrl] = useState<string>('');
	const [specializations, setSpecializations] = useState<Array<{ label: string; value: string }>>(
		[],
	);

	useEffect(() => {
		dispatch(getSpecializations({ pageNumber: 1, pageSize: 1000 }))
			.unwrap()
			.then((response) => {
				const options = convertToSelectValues(response.data?.items);
				if (options) {
					setSpecializations(options);
				}
			})
			.catch(() => {});
	}, []);

	useEffect(() => {
		if (mode === 'edit' && personalId) {
			dispatch(getPersonalById({ id: personalId }))
				.unwrap()
				.then((response) => {
					if (response.data) {
						const personal = response.data;
						form.reset({
							...personal,
							specializationId: personal.speciality.id,
						});
						setPhotoUrl(personal.photoUrl || '');
					}
				})
				.catch(() => {});
		} else if (mode === 'add') {
			form.reset(PersonalFormConfig.defaultValues);
			setPhotoUrl('');
			setPhotoFile(null);
		}
	}, [mode, personalId]);

	const { register, formState, control } = form;

	const handleSubmit = () => {
		const values = form.getValues();
		const action =
			mode === 'add'
				? addPersonal({ ...values, photoUrl })
				: updatePersonal({ ...values, photoUrl });
		dispatch(action)
			.unwrap()
			.then(() => {
				form.reset();
				setPhotoUrl('');
				setPhotoFile(null);
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

	const handleUploadPhoto = async (file: File) => {
		try {
			setPhotoFile(file);

			const res = await dispatch(uploadFile({ mimeType: file.type })).unwrap();
			const uploadUrl = res.data as string;

			await fetch(uploadUrl, {
				method: 'PUT',
				headers: {
					'Content-Type': file.type,
				},
				body: file,
			});

			setPhotoUrl(uploadUrl);
			form.setValue('photoUrl', uploadUrl);
		} catch (e) {
			console.error('Ошибка загрузки', e);
		}
	};

	return (
		<FormProvider {...form}>
			<div className="flex h-full w-full max-w-[500px] flex-col items-center gap-[10px] overflow-auto rounded-primary bg-white px-[40px] py-[25px]">
				<p className="w-full text-center text-[22px] font-semibold text-primaryDark">
					{mode === 'add' ? 'Добавление нового сотрудника' : 'Редактирование сотрудника'}
				</p>
				<div className="flex h-fit w-full flex-col items-center">
					<label className="cursor-pointer">
						<input
							type="file"
							accept="image/*"
							className="hidden"
							onChange={(e) => {
								const file = e.target.files?.[0];
								if (file) handleUploadPhoto(file);
							}}
						/>
						<div className="flex size-[60px] items-center justify-center overflow-hidden rounded-full bg-primary">
							{photoFile ? (
								<img
									src={URL.createObjectURL(photoFile)}
									alt="Фото"
									className="h-full w-full rounded-full object-cover"
								/>
							) : photoUrl && mode === 'edit' ? (
								<img
									src={photoUrl}
									alt="Фото"
									className="h-full w-full rounded-full object-cover"
								/>
							) : (
								<span className="text-white">+</span>
							)}
						</div>
					</label>
				</div>
				<div className="flex h-full w-full flex-col gap-[10px]">
					<Input
						{...register('fio')}
						label={formState.errors.fio?.message || 'Фамилия Имя Отчество'}
						id="fio"
						classNames={{
							inputClassName: 'w-full h-[40px]',
							wrapperClassName: 'w-full',
							containerClassName: 'bg-[#F5F5F5] h-[40px]',
							labelClassName: formState.errors.fio?.message && 'text-error',
						}}
						placeholder="Введите Фамилию Имя Отчество"
					/>
					<Controller
						control={control}
						name="specializationId"
						render={({ field }) => (
							<div className="flex-1">
								<Select
									{...field}
									wrapperClassname="w-full h-[40px]"
									buttonClassName="w-full h-[40px] bg-[#F5F5F5] rounded-primary text-[20px]"
									buttonLabelClassName={
										field.value ? 'text-primary' : 'text-textGray'
									}
									labelClassName={
										formState.errors.specializationId?.message && 'text-error'
									}
									options={specializations}
									value={field.value || ''}
									label={
										formState.errors.specializationId?.message ||
										'Специализация'
									}
									onChange={field.onChange}
								/>
							</div>
						)}
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
						/>
						<Input
							{...register('dateOfBirth')}
							label={formState.errors.dateOfBirth?.message || 'Дата рождения'}
							id="dateOfBirth"
							placeholder="ДД.ММ.ГГГГ"
							classNames={{
								inputClassName: 'w-full h-[40px]',
								wrapperClassName: 'w-full',
								containerClassName: 'bg-[#F5F5F5] h-[40px]',
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
							inputClassName: 'w-full h-[40px]',
							wrapperClassName: 'w-full',
							containerClassName: 'bg-[#F5F5F5] h-[40px]',
							labelClassName: formState.errors.phoneNumber?.message && 'text-error',
						}}
						placeholder="Введите номер"
					/>
					<Input
						{...register('email')}
						label={formState.errors.email?.message || 'Email'}
						id="email"
						classNames={{
							inputClassName: 'w-full h-[40px]',
							wrapperClassName: 'w-full',
							containerClassName: 'bg-[#F5F5F5] h-[40px]',
							labelClassName: formState.errors.email?.message && 'text-error',
						}}
						placeholder="Введите email"
					/>
					<Input
						{...register('livingAdress')}
						label={formState.errors.livingAdress?.message || 'Адрес проживания'}
						id="adress"
						classNames={{
							inputClassName: 'w-full h-[40px]',
							wrapperClassName: 'w-full',
							containerClassName: 'bg-[#F5F5F5] h-[40px]',
							labelClassName: formState.errors.livingAdress?.message && 'text-error',
						}}
						placeholder="Введите адрес"
					/>
					<Input
						{...register('office')}
						label={formState.errors.office?.message || 'Кабинет'}
						id="office"
						classNames={{
							inputClassName: 'w-full h-[40px]',
							wrapperClassName: 'w-full',
							containerClassName: 'bg-[#F5F5F5] h-[40px]',
							labelClassName: formState.errors.office?.message && 'text-error',
						}}
						type="number"
						max={1000}
						placeholder="Введите кабинет"
					/>
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
