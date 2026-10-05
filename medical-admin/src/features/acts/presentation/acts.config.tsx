import { HOME_ROUTES } from '@features/home/constants';
import type { NonIndexRouteObject } from 'react-router-dom';
import ActsScreen from './screens/acts.screen';

export const ActsConfig: NonIndexRouteObject = {
	...HOME_ROUTES.acts,
	caseSensitive: true,
	element: <ActsScreen />,
};

