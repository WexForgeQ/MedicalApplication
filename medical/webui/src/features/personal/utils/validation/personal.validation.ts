import z from 'zod';

export const PersonalFormScheme = z.object({
	id: z.string().optional(),
	fio: z
		.string()
		.min(1, 'Поле обязательно для заполнения')
		.refine((val) => {
			const parts = val.trim().split(/\s+/).filter(Boolean);
			return parts.length >= 3;
		}, 'Необходимо указать Фамилию, Имя и Отчество'),
	email: z.string().min(1, 'Поле обязательно для заполнения'),
	phoneNumber: z
		.string()
		.min(1, 'Поле обязательно для заполнения')
		.regex(
			/^\+375\((25|29|33|44)\)\d{3}-\d{2}-\d{2}$/,
			'Неверный формат. Ожидается: +375(XX)XXX-XX-XX',
		),
	dateOfBirth: z
		.string()
		.min(1, 'Поле обязательно')
		.refine((val) => {
			const date = new Date(val);
			return !isNaN(date.getTime()) && date <= new Date();
		}, 'Некорректная дата или дата в будущем'),
	livingAdress: z.string().min(1, 'Поле обязательно для заполнения'),
	specializationId: z.string().min(1, 'Необходимо выбрать специализацию'),
	gender: z.boolean().optional(),
	office: z.string().min(1, 'Поле обязательно для заполнения'),
	photoUrl: z.string().min(1, 'Фото обязательно для выбора'),
});

export type PersonalFormSchemeType = z.infer<typeof PersonalFormScheme>;
