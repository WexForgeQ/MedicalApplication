import { HOME_ROUTES } from '@features/home/constants';
import type { NonIndexRouteObject } from 'react-router-dom';
import { SlotsScreen } from './screens';
import ScheduleTable from './screens/slots-main.screen';

export const SlotsConfig: NonIndexRouteObject = {
	...HOME_ROUTES.slots,
	caseSensitive: true,
	element: <SlotsScreen />,
};

export const SlotsMainConfig: NonIndexRouteObject = {
	...HOME_ROUTES.slotsMain,
	caseSensitive: true,
	element: <ScheduleTable />,
};
