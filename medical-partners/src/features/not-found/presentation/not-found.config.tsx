import { APP_ROUTES } from '@core/constants';
import type { NonIndexRouteObject } from 'react-router-dom';
import { NotFoundScreen } from './screens';

export const NotFoundConfig: NonIndexRouteObject = {
	...APP_ROUTES.notFound,
	element: <NotFoundScreen />,
};
