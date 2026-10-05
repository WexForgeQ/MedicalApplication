import { HOME_ROUTES } from '@features/home/constants';
import type { NonIndexRouteObject } from 'react-router';
import { ContactsScreen } from './screens';

export const ContactsConfig: NonIndexRouteObject = {
	...HOME_ROUTES.contacts,
	caseSensitive: true,
	element: <ContactsScreen />,
};
