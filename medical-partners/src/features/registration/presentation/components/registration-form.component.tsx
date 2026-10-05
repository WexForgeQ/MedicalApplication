import { Button, Input, LoadingProccessBar } from '@core';
import { APP_ROUTES } from '@core/constants';
import { useAppNavigate } from '@core/utils';
import { registration } from '@features/auth/services';
import { RegCompanyInfoFormConfig } from '@features/settings/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMask } from '@react-input/mask';
import { useAppDispatch, useSliceField } from '@store';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

export const RegistrationForm = () => {
	const form = useForm({
		defaultValues: RegCompanyInfoFormConfig.defaultValues,
		resolver: zodResolver(RegCompanyInfoFormConfig.schema),
	});

	const dispatch = useAppDispatch();
	const isLoading = useSliceField('authSlice', 'loadings', 'registration');

	const { register, formState } = form;
	const navigate = useAppNavigate();
	const handleSubmit = () => {
		form.handleSubmit(() =>
			dispatch(registration(form.getValues()))
				.unwrap()
				.then(() => {
					navigate(APP_ROUTES.home.path + 'checks');
				})
				.catch(() => {}),
		)();
	};

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handlePasswordToggle = () => {
		setShowPassword((prev) => !prev);
	};

	const handleConfirmPasswordToggle = () => {
		setShowConfirmPassword((prev) => !prev);
	};

	const phoneRef = useMask({
		mask: '+375(__)___-__-__',
		replacement: { _: /\d/ },
		showMask: true,
	});

	return (
		<FormProvider {...form}>
			<div className="flex h-full max-h-[850px] w-[560px] max-w-[800px] flex-col items-center gap-[20px] overflow-auto rounded-primary bg-white px-[40px] py-[25px]">
				<p className="w-full text-center text-[22px] font-semibold text-primaryDark">
					Регистрация
				</p>
				<div className="flex w-full flex-col gap-[10px]">
					<Input
						{...register('companyName')}
						id="companyName"
						placeholder="Введите название компании"
						errorMessage={formState.errors.companyName?.message}
					/>
					<Input
						ref={phoneRef}
						onChange={(e) => form.setValue(`phoneNumber`, e.target.value)}
						id="phoneNumber"
						placeholder="Введите номер телефона"
						errorMessage={formState.errors.phoneNumber?.message}
					/>
					<Input
						{...register('password')}
						type={showPassword ? 'text' : 'password'}
						id="password"
						placeholder="Введите пароль"
						errorMessage={formState.errors.password?.message}
						iconPos="right"
						Icon={showPassword ? FaRegEye : FaRegEyeSlash}
						onIconClick={handlePasswordToggle}
					/>
					<Input
						{...register('confirmPassword')}
						type={showConfirmPassword ? 'text' : 'password'}
						iconPos="right"
						id="confirmPassword"
						placeholder="Подтвердите пароль"
						errorMessage={formState.errors.confirmPassword?.message}
						Icon={showConfirmPassword ? FaRegEye : FaRegEyeSlash}
						onIconClick={handleConfirmPasswordToggle}
					/>
					<Input
						{...register('unp')}
						id="unp"
						placeholder="Введите УНП"
						errorMessage={formState.errors.unp?.message}
					/>
					<Input
						{...register('currentAccount')}
						id="currentAccount"
						placeholder="Введите текущий счёт"
						errorMessage={formState.errors.currentAccount?.message}
					/>
					<Input
						{...register('bik')}
						id="bik"
						placeholder="Введите БИК"
						errorMessage={formState.errors.bik?.message}
					/>
					<Input
						{...register('directorFio')}
						id="directorFio"
						placeholder="Введите ФИО директора"
						errorMessage={formState.errors.directorFio?.message}
					/>
					<Input
						{...register('bankAddress')}
						id="bankAddress"
						placeholder="Введите адрес банка"
						errorMessage={formState.errors.bankAddress?.message}
					/>
					<Input
						{...register('companyAddress')}
						id="companyAddress"
						placeholder="Введите адрес компании"
						errorMessage={formState.errors.companyAddress?.message}
					/>
					<Input
						{...register('companyDescription')}
						id="companyDescription"
						placeholder="Введите описание компании"
						errorMessage={formState.errors.companyDescription?.message}
					/>
				</div>
				<Button
					type="button"
					onClick={handleSubmit}
					className="h-[40px] w-[165px]"
					disabled={isLoading}
				>
					Зарегистрироваться
				</Button>
				{isLoading && <LoadingProccessBar bgClassName="w-full" />}
			</div>
		</FormProvider>
	);
};
