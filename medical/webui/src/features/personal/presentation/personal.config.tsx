import { HOME_ROUTES } from '@features/home/constants';
import type { NonIndexRouteObject } from 'react-router-dom';
import { PersonalScreen } from './screens';

export const PersonalConfig: NonIndexRouteObject = {
	...HOME_ROUTES.personal,
	caseSensitive: true,
	element: <PersonalScreen />,
};
