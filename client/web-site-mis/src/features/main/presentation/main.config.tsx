import { HOME_ROUTES } from '@features/home/constants';
import type { NonIndexRouteObject } from 'react-router';
import { MainScreen } from './screens';

export const MainConfig: NonIndexRouteObject = {
	...HOME_ROUTES.main,
	caseSensitive: true,
	element: <MainScreen />,
};
