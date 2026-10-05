import type { NavbarConfig } from '../types';
import { HOME_ROUTES } from './home-routes.constant';

export const navbarConfig: NavbarConfig = {
	basePath: '',
	items: [
		{
			...HOME_ROUTES.main,
			label: 'Главная',
			width: 63,
		},
		{
			...HOME_ROUTES.doctors,
			label: 'Врачи',
			width: 49,
		},
		{
			...HOME_ROUTES.services,
			label: 'Услуги',
			width: 53,
		},
		{
			...HOME_ROUTES.stocks,
			label: 'Акции',
			width: 51,
		},
		{
			...HOME_ROUTES.contacts,
			label: 'Контакты',
			width: 76,
		},
	],
};
