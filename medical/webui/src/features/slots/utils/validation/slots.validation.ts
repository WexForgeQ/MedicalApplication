import z from 'zod';

export const SlotFormScheme = z.object({
	id: z.string().optional(),
	doctorId: z.string().min(1, 'Необходимо выбрать врача'),
	specializationId: z.string().optional(),
	office: z.string().optional(),
	date: z
		.string()
		.min(1, 'Поле обязательно')
		.refine((val) => {
			const date = new Date(val);
			return !isNaN(date.getTime());
		}, 'Некорректная дата'),

	time: z
		.string()
		.min(1, 'Поле обязательно')
		.regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, 'Неверный формат. Ожидается: ЧЧ:ММ'),
});

export const AppointmentFormScheme = z.object({
	userId: z.string(),
	phoneNumber: z
		.string()
		.min(1, 'Пожалуйста, введите номер телефона')
		.regex(
			/^\+375\(\d{2}\)\d{3}-\d{2}-\d{2}$/,
			'Неверный формат. Ожидается: +375(XX)XXX-XX-XX',
		),
	userName: z.string(),
	appointmentType: z.string().min(1, 'Поле обязательно'),
});

export type SlotFormSchemeType = z.infer<typeof SlotFormScheme>;
export type AppointmentFormSchemeType = z.infer<typeof AppointmentFormScheme>;
