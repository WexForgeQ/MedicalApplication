import { Button, Input, LoadingProccessBar } from '@core';
import { APP_ROUTES } from '@core/constants';
import { useAppNavigate } from '@core/utils';
import { login } from '@features/auth/services';
import { AuthFormConfig } from '@features/auth/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useSliceField } from '@store';
import type { FormEvent } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export const AuthForm = () => {
	const form = useForm({
		defaultValues: AuthFormConfig.defaultValues,
		resolver: zodResolver(AuthFormConfig.schema),
	});

	const { register, formState } = form;
	const dispatch = useAppDispatch();
	const isLoading = useSliceField('authSlice', 'loadings', 'login');
	const navigate = useAppNavigate();
	const submitHandle = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		form.handleSubmit((data) => {
			dispatch(login(data))
				.unwrap()
				.then(() => {
					navigate(APP_ROUTES.home.path);
				})
				.catch((err) => {});
		})();
	};

	return (
		<FormProvider {...form}>
			<form
				className="flex h-[900px] w-[576px] flex-col gap-[40px] rounded-primary bg-white pb-[278px] pl-[114px] pr-[113px] pt-[199px]"
				onSubmit={submitHandle}
			>
				<p className="w-full text-center text-[22px] font-semibold leading-[1.364] text-primaryDark">
					Авторизация
				</p>
				<div className="flex w-full flex-col items-center gap-[30px]">
					<Input
						{...register('login')}
						label="Логин"
						id="login"
						placeholder="Введите логин"
						errorMessage={formState.errors.login?.message}
						maxLength={26}
					/>
					<Input
						{...register('password')}
						label="Пароль"
						id="password"
						type="password"
						placeholder="Введите пароль"
						maxLength={26}
						errorMessage={formState.errors.password?.message}
					/>
					<Button type="submit" className="w-[165px]" disabled={isLoading}>
						Войти
					</Button>
					{isLoading && <LoadingProccessBar bgClassName="w-full" />}
				</div>
			</form>
		</FormProvider>
	);
};
