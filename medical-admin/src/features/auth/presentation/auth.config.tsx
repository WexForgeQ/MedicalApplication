import { APP_ROUTES } from '@core/constants';
import type { NonIndexRouteObject } from 'react-router-dom';
import { AuthScreen } from './screens';

export const AuthConfig: NonIndexRouteObject = {
	...APP_ROUTES.auth,
	caseSensitive: true,
	element: <AuthScreen />,
};
