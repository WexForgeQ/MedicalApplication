import z from 'zod';

export const AuthFormScheme = z.object({
	phoneNumber: z
		.string()
		.min(1, 'Пожалуйста, введите номер телефона')
		.regex(
			/^\+375\(\d{2}\)\d{3}-\d{2}-\d{2}$/,
			'Неверный формат. Ожидается: +375(XX)XXX-XX-XX',
		),
	password: z.string().min(5, { message: 'Введите пароль' }),
});

export type AuthFormSchemeType = z.infer<typeof AuthFormScheme>;
