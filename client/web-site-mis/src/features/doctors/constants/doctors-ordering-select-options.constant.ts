import type { SelectOption } from '@core/types';

export const doctorsOrderingSelectOptions: SelectOption[] = [
	{
		value: 'name',
		label: 'Имя',
	},
	{
		value: 'patronym',
		label: 'Отчество',
	},
	{
		value: 'surname',
		label: 'Фамилия',
	},
	{
		value: 'gender',
		label: 'Гендер',
	},
	{
		value: 'birthDay',
		label: 'Дата рождения',
	},
	{
		value: 'phoneNumber',
		label: 'Номер телефона',
	},
	{
		value: 'mail',
		label: 'Почта',
	},
	{
		value: 'address',
		label: 'Адрес',
	},
	{
		value: 'specialization',
		label: 'Специализация',
	},
	{
		value: 'office',
		label: 'Кабинет',
	},
];
