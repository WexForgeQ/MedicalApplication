import { APP_ROUTES } from '@core/constants';
import type { NonIndexRouteObject } from 'react-router-dom';
import { HomeLayout } from './screens';

export const HomeConfig: NonIndexRouteObject = {
	...APP_ROUTES.home,
	caseSensitive: true,
	element: <HomeLayout />,
};
