import { HOME_ROUTES } from '@features/home/constants';
import type { NonIndexRouteObject } from 'react-router';
import { ServicesScreen } from './screens';

export const ServicesConfig: NonIndexRouteObject = {
	...HOME_ROUTES.services,
	caseSensitive: true,
	element: <ServicesScreen />,
};
