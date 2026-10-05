import { createAsyncCases } from '@core/non-alias';
import type { SliceCommon, SliceState } from '@core/types';
import { createSlice } from '@reduxjs/toolkit';
import type { StocksSliceDataState } from '../types';
import { getStocksList, type StocksServicesKeys } from './stocks-services.store';

const initialState: SliceState<StocksSliceDataState, StocksServicesKeys> = {
	loadings: {
		getStocksList: true,
	},
	data: {
		lastGetStocksProps: null,
	},
	uniqueLoadings: {
		getStocksList: [],
	},
};

export const stocksSlice = createSlice({
	name: 'stocksSlice',
	initialState: initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		createAsyncCases(builder, getStocksList, {
			toastHandlingOptions: {
				fetchName: 'Список акций',
				skipErrorToasting: {
					byStatusCode: 404,
				},
			},
			autoSaveAsynkThunkArgsToSliceState: 'lastGetStocksProps',
		});
	},
});

export const stocksSliceCommon: SliceCommon = {
	reset: stocksSlice.actions.reset,
	sliceName: stocksSlice.name,
};
