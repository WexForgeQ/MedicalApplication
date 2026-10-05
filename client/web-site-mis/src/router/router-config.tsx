import {
	AppointmentConfig,
	ContactsConfig,
	DoctorsConfig,
	HomeConfig,
	MainConfig,
	NotFoundConfig,
	ServicesConfig,
	StocksConfig,
	StocksDetailConfig,
} from '@features';
import type { RouteObject } from 'react-router-dom';

export const appRouterConfig: RouteObject[] = [
	NotFoundConfig,
	{
		...HomeConfig,
		children: [
			DoctorsConfig,
			AppointmentConfig,
			ServicesConfig,
			StocksConfig,
			ContactsConfig,
			MainConfig,
			StocksDetailConfig,
		],
	},
];
