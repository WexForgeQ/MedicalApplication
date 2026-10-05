import { APP_ROUTES } from '@core/constants';
import type { NonIndexRouteObject } from 'react-router-dom';
import { RegistrationScreen } from './screens';

export const RegistrationConfig: NonIndexRouteObject = {
	...APP_ROUTES.registration,
	caseSensitive: true,
	element: <RegistrationScreen />,
};
