import { HOME_ROUTES } from '@features/home/constants';
import type { NonIndexRouteObject } from 'react-router';
import { StockDetailScreen, StocksScreen } from './screens';

export const StocksConfig: NonIndexRouteObject = {
	...HOME_ROUTES.stocks,
	caseSensitive: true,
	element: <StocksScreen />,
};

export const StocksDetailConfig: NonIndexRouteObject = {
	path: `${HOME_ROUTES.stocks.path}/:id`,
	caseSensitive: true,
	element: <StockDetailScreen />,
};
