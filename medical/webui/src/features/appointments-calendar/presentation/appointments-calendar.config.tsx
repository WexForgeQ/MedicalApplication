import { HOME_ROUTES } from '@features/home/constants';
import type { NonIndexRouteObject } from 'react-router-dom';
import { AppointmentsCalendarScreen } from './screens';

export const AppointmentsConfig: NonIndexRouteObject = {
	...HOME_ROUTES.appointmentsCalendar,
	caseSensitive: true,
	element: <AppointmentsCalendarScreen />,
};
