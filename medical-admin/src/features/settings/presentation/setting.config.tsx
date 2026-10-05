import { HOME_ROUTES } from '@features/home/constants';
import type { NonIndexRouteObject } from 'react-router-dom';
import SettingsScreen from './screens/settings.screen';

export const SettingsConfig: NonIndexRouteObject = {
	...HOME_ROUTES.settings,
	caseSensitive: true,
	element: <SettingsScreen />,
};
