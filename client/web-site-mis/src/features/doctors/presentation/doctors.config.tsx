import { HOME_ROUTES } from '@features/home/constants';
import type { NonIndexRouteObject } from 'react-router';
import { DoctorsSreen } from './screens';

export const DoctorsConfig: NonIndexRouteObject = {
	...HOME_ROUTES.doctors,
	caseSensitive: true,
	element: <DoctorsSreen />,
};
