import {
	AppointmentsCalendarIcon,
	AppointmentsIcon,
	SidebarMainIcon,
	SidebarPatientsIcon,
	SidebarPesonalIcon,
} from '@core/presentation/components/icons';
import type { SidebarConfig } from '../types';
import { HOME_ROUTES } from './home-routes.constant';

export const sidebarConfig: SidebarConfig = {
	basePath: '',
	items: [
		{
			...HOME_ROUTES.main,
			label: 'Главная',
			Icon: SidebarMainIcon,
		},
		{
			...HOME_ROUTES.patients,
			label: 'Пациенты',
			Icon: SidebarPatientsIcon,
		},
		{
			...HOME_ROUTES.materials,
			label: 'Материалы',
			Icon: SidebarPatientsIcon,
		},
		{
			...HOME_ROUTES.personal,
			label: 'Персонал',
			Icon: SidebarPesonalIcon,
		},
		{
			...HOME_ROUTES.slots,
			label: 'Слоты',
			Icon: AppointmentsIcon,
		},
		{
			...HOME_ROUTES.appointmentsCalendar,
			label: 'Записи',
			Icon: AppointmentsCalendarIcon,
		},
	],
};
