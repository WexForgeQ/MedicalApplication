import { ActsIcon, ChecksIcon, SettingsIcon } from '@core/presentation/components/icons';
import type { SidebarConfig } from '../types';
import { HOME_ROUTES } from './home-routes.constant';

export const sidebarConfig: SidebarConfig = {
	basePath: '',
	items: [
		// {
		// 	...HOME_ROUTES.clients,
		// 	label: 'Клиенты',
		// 	Icon: SidebarMainIcon,
		// },
		{
			...HOME_ROUTES.checks,
			label: 'Счета',
			Icon: ChecksIcon,
		},
		{
			...HOME_ROUTES.acts,
			label: 'Акты',
			Icon: ActsIcon,
		},

		{
			...HOME_ROUTES.settings,
			label: 'Настройки',
			Icon: SettingsIcon,
		},
	],
};
