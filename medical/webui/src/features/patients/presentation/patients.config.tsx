import { HOME_ROUTES } from '@features/home/constants';
import type { NonIndexRouteObject } from 'react-router-dom';
import PatientsScreen from './screens/patients.screen';

export const PatientsConfig: NonIndexRouteObject = {
	...HOME_ROUTES.patients,
	caseSensitive: true,
	element: <PatientsScreen />,
};
