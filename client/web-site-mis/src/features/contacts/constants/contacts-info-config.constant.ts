import type { ContactsInfoBlockProps } from '../presentation/components';

export const contactsInfoConfig: ContactsInfoBlockProps[] = [
	{
		title: 'График работы',
		fields: [
			{
				primaryText: 'Понедельник - пятница',
				secondaryText: '8:00 - 19:00',
				classNames: {
					primaryTextClassName: 'text-text',
				},
			},
			{
				primaryText: 'Суббота - воскресенье',
				secondaryText: '8:00 - 16:00',
				classNames: {
					primaryTextClassName: 'text-text',
				},
			},
		],
	},
	{
		title: 'Контакты',
		fields: [
			{
				primaryText: '+ 375 (29) 212-12-12',
				copyAbility: true,
			},
			{
				primaryText: '+ 375 (33) 212-12-12',
				copyAbility: true,
			},
		],
	},
	{
		title: 'Адрес',
		fields: [
			{
				primaryText: 'г. Минск, пр-т Независимости, 22 к3, вход возле аптеки',
				copyAbility: true,
				classNames: {
					primaryTextClassName: 'w-[277px]',
				},
			},
		],
	},
];
