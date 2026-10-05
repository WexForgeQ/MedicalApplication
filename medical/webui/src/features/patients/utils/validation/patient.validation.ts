import z from 'zod';

export const PatientFormScheme = z.object({
	id: z.string().optional(),
	fio: z.string().min(1, 'Поле обязательно для заполнения'),
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
		.min(1, 'Поле обязательно для заполнения')
		.refine((val) => {
			const date = new Date(val);
			return !isNaN(date.getTime()) && date <= new Date();
		}, 'Некорректная дата или дата в будущем'),
	livingAdress: z.string().min(1, 'Поле обязательно для заполнения'),
	chronicDiseaseData: z.string().optional(),
	gender: z.boolean().optional(),
});

export type PatientFormSchemeType = z.infer<typeof PatientFormScheme>;
