import type { GetPaginatedDataProps } from '@core/types';
import type { Stock } from './stocks.types';

export interface StocksSliceDataState {
	lastGetStocksProps: GetPaginatedDataProps<Stock, object> | null;
}
