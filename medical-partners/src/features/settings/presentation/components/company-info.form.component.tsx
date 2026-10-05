import { Button, Input, LoadingProccessBar } from '@core';
import {
	getCompanyProfile,
	updateCompanyProfile,
} from '@features/settings/services/settings.services';
import type { CompanyInfoSchemeType } from '@features/settings/utils';
import { CompanyInfoFormConfig } from '@features/settings/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useSliceField } from '@store';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
	onSuccess?: () => void;
}

export const CompanyInfoForm = ({ onSuccess }: Props) => {
	const form = useForm<CompanyInfoSchemeType>({
		defaultValues: CompanyInfoFormConfig.defaultValues,
		resolver: zodResolver(CompanyInfoFormConfig.schema),
	});

	const dispatch = useAppDispatch();
	const isLoadingUpdate = useSliceField('settingsSlice', 'loadings', 'updateCompanyProfile');
	const isLoadingGet = useSliceField('settingsSlice', 'loadings', 'getCompanyProfile');
	const isLoading = isLoadingUpdate || isLoadingGet;

	useEffect(() => {
		dispatch(getCompanyProfile())
			.unwrap()
			.then((response) => {
				if (response.data) {
					form.reset(response.data);
				}
			})
			.catch(() => {});
	}, []);

	const { register, formState, control } = form;

	const handleSubmit = () => {
		const values = form.getValues();
		const action = updateCompanyProfile({ data: values });
		dispatch(action)
			.unwrap()
			.then(() => {
				form.reset();
				onSuccess?.();
			})
			.catch(() => {});
	};

	if (isLoadingGet) {
		return (
			<div className="flex h-full w-full max-w-[500px] flex-col items-center justify-center rounded-primary bg-white px-[40px] py-[25px]">
				<LoadingProccessBar bgClassName="w-full max-w-[300px]" />
			</div>
		);
	}

	return (
		<FormProvider {...form}>
			<div className="flex h-full w-full max-w-[800px] flex-col items-center gap-[20px] rounded-primary bg-white px-[40px] py-[25px]">
				<p className="w-full text-center text-[22px] font-semibold text-primaryDark">
					{'Данные о компании'}
				</p>
				<div className="flex size-full gap-[10px]">
					<div className="flex w-full flex-col gap-[20px]">
						<div className="flex w-full flex-col">
							<Input
								{...register('companyName')}
								label={formState.errors.companyName?.message || 'Название компании'}
								id="companyName"
								classNames={{
									inputClassName: 'w-full',
									wrapperClassName: 'w-full',
									containerClassName: 'bg-[#F5F5F5] h-[40px]',
									labelClassName:
										formState.errors.companyName?.message && 'text-error',
								}}
								placeholder="Введите название компании"
							/>
						</div>

						<div className="flex w-full flex-col">
							<Input
								{...register('phoneNumber')}
								label={formState.errors.phoneNumber?.message || 'Номер телефона'}
								id="phoneNumber"
								classNames={{
									inputClassName: 'w-full',
									wrapperClassName: 'w-full',
									containerClassName: 'bg-[#F5F5F5] h-[40px]',
									labelClassName:
										formState.errors.phoneNumber?.message && 'text-error',
								}}
								placeholder="Введите номер телефона"
							/>
						</div>

						<div className="flex w-full flex-col">
							<Input
								{...register('unp')}
								label={formState.errors.unp?.message || 'УНП'}
								id="unp"
								classNames={{
									inputClassName: 'w-full',
									wrapperClassName: 'w-full',
									containerClassName: 'bg-[#F5F5F5] h-[40px]',
									labelClassName: formState.errors.unp?.message && 'text-error',
								}}
								placeholder="Введите УНП"
							/>
						</div>

						<div className="flex w-full flex-col">
							<Input
								{...register('currentAccount')}
								label={formState.errors.currentAccount?.message || 'Текущий счёт'}
								id="currentAccount"
								classNames={{
									inputClassName: 'w-full',
									wrapperClassName: 'w-full',
									containerClassName: 'bg-[#F5F5F5] h-[40px]',
									labelClassName:
										formState.errors.currentAccount?.message && 'text-error',
								}}
								placeholder="Введите текущий счёт"
							/>
						</div>

						<div className="flex w-full flex-col">
							<Input
								{...register('bik')}
								label={formState.errors.bik?.message || 'БИК'}
								id="bik"
								classNames={{
									inputClassName: 'w-full',
									wrapperClassName: 'w-full',
									containerClassName: 'bg-[#F5F5F5] h-[40px]',
									labelClassName: formState.errors.bik?.message && 'text-error',
								}}
								placeholder="Введите БИК"
							/>
						</div>
					</div>
					<div className="flex w-full flex-col gap-[20px]">
						<div className="flex w-full flex-col">
							<Input
								{...register('directorFio')}
								label={formState.errors.directorFio?.message || 'ФИО директора'}
								id="directorFio"
								classNames={{
									inputClassName: 'w-full',
									wrapperClassName: 'w-full',
									containerClassName: 'bg-[#F5F5F5] h-[40px]',
									labelClassName:
										formState.errors.directorFio?.message && 'text-error',
								}}
								placeholder="Введите ФИО директора"
							/>
						</div>

						<div className="flex w-full flex-col">
							<Input
								{...register('bankAddress')}
								label={formState.errors.bankAddress?.message || 'Адрес банка'}
								id="bankAddress"
								classNames={{
									inputClassName: 'w-full',
									wrapperClassName: 'w-full',
									containerClassName: 'bg-[#F5F5F5] h-[40px]',
									labelClassName:
										formState.errors.bankAddress?.message && 'text-error',
								}}
								placeholder="Введите адрес банка"
							/>
						</div>

						<div className="flex w-full flex-col">
							<Input
								{...register('companyAddress')}
								label={formState.errors.companyAddress?.message || 'Адрес компании'}
								id="companyAddress"
								classNames={{
									inputClassName: 'w-full',
									wrapperClassName: 'w-full',
									containerClassName: 'bg-[#F5F5F5] h-[40px]',
									labelClassName:
										formState.errors.companyAddress?.message && 'text-error',
								}}
								placeholder="Введите адрес компании"
							/>
						</div>

						<div className="flex w-full flex-col">
							<Input
								{...register('companyDescription')}
								label={
									formState.errors.companyDescription?.message ||
									'Описание компании'
								}
								id="companyDescription"
								classNames={{
									inputClassName: 'w-full',
									wrapperClassName: 'w-full',
									containerClassName: 'bg-[#F5F5F5] h-[40px]',
									labelClassName:
										formState.errors.companyDescription?.message &&
										'text-error',
								}}
								placeholder="Введите описание компании"
							/>
						</div>
					</div>
				</div>

				<Button
					onClick={() => {
						form.handleSubmit(handleSubmit)();
					}}
					className="w-[165px]"
					disabled={isLoading}
				>
					{'Редактировать'}
				</Button>
				{isLoading && <LoadingProccessBar bgClassName="w-full" />}
			</div>
		</FormProvider>
	);
};
