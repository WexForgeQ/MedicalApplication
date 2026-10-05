import z from 'zod';

export const AuthFormScheme = z.object({
	login: z.string().min(5, { message: 'Введите логин' }),
	password: z.string().min(5, { message: 'Введите пароль' }),
});

export type AuthFormSchemeType = z.infer<typeof AuthFormScheme>;
