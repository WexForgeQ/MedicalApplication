import { HOME_ROUTES } from '@features/home/constants';
import type { NonIndexRouteObject } from 'react-router-dom';
import ChecksScreen from './screens/checks.screen';

export const ChecksConfig: NonIndexRouteObject = {
	...HOME_ROUTES.checks,
	caseSensitive: true,
	element: <ChecksScreen />,
};

