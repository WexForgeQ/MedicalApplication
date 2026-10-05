import { z } from 'zod';

// Основная схема для компании
export const CompanyInfoScheme = z.object({
	id: z.string().optional(),
	companyName: z.string().min(1, 'Поле обязательно для заполнения'),
	phoneNumber: z
		.string()
		.min(1, 'Поле обязательно для заполнения')
		.regex(
			/^\+375\(\d{2}\)\d{3}-\d{2}-\d{2}$/,
			'Неверный формат. Ожидается: +375(XX)XXX-XX-XX',
		),
	unp: z.string().min(1, 'Поле обязательно для заполнения'),
	currentAccount: z.string().min(1, 'Поле обязательно для заполнения'),
	bik: z.string().min(1, 'Поле обязательно для заполнения'),
	directorFio: z.string().min(1, 'Поле обязательно для заполнения'),
	bankAddress: z.string().min(1, 'Поле обязательно для заполнения'),
	companyAddress: z.string().min(1, 'Поле обязательно для заполнения'),
	companyDescription: z.string().min(1, 'Поле обязательно для заполнения'),
});

export const RegCompanyInfoScheme = z
	.object({
		id: z.string().optional(),
		companyName: z.string().min(1, 'Поле обязательно для заполнения'),
		phoneNumber: z
			.string()
			.min(1, 'Поле обязательно для заполнения')
			.regex(
				/^\+375\(\d{2}\)\d{3}-\d{2}-\d{2}$/,
				'Неверный формат. Ожидается: +375(XX)XXX-XX-XX',
			),
		unp: z.string().min(1, 'Поле обязательно для заполнения'),
		currentAccount: z.string().min(1, 'Поле обязательно для заполнения'),
		bik: z.string().min(1, 'Поле обязательно для заполнения'),
		directorFio: z.string().min(1, 'Поле обязательно для заполнения'),
		bankAddress: z.string().min(1, 'Поле обязательно для заполнения'),
		companyAddress: z.string().min(1, 'Поле обязательно для заполнения'),
		companyDescription: z.string().min(1, 'Поле обязательно для заполнения'),
		password: z
			.string()
			.min(8, 'Пароль должен быть длиной не менее 8 символов')
			.regex(
				/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
				'Пароль должен содержать хотя бы 1 заглавную букву, 1 цифру и 1 специальный символ.',
			),
		confirmPassword: z
			.string()
			.min(8, 'Пароль должен быть длиной не менее 8 символов')
			.regex(
				/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
				'Пароль должен содержать хотя бы 1 заглавную букву, 1 цифру и 1 специальный символ.',
			),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	});

export type CompanyInfoSchemeType = z.infer<typeof CompanyInfoScheme>;
export type RegCompanyInfoSchemeType = z.infer<typeof RegCompanyInfoScheme>;
