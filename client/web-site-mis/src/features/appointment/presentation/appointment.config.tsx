import { HOME_ROUTES } from '@features/home/constants';
import type { NonIndexRouteObject } from 'react-router';
import { AppointmentScreen } from './screens';

export const AppointmentConfig: NonIndexRouteObject = {
	...HOME_ROUTES.appointment,
	caseSensitive: true,
	element: <AppointmentScreen />,
};
