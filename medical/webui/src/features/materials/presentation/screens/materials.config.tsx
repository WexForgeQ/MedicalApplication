import { HOME_ROUTES } from '@features/home/constants';
import type { NonIndexRouteObject } from 'react-router-dom';
import MaterialsScreen from './materials.screen';

export const MaterialsConfig: NonIndexRouteObject = {
	...HOME_ROUTES.materials,
	caseSensitive: true,
	element: <MaterialsScreen />,
};
