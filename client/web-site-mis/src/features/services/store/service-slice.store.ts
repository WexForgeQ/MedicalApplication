import { createAsyncCases } from '@core/non-alias';
import type { SliceCommon, SliceState } from '@core/types';
import { createSlice } from '@reduxjs/toolkit';
import { getServicesList, type ServicesServiceKeys } from './services-services.store';

const initialState: SliceState<object, ServicesServiceKeys> = {
	loadings: {
		getServicesList: true,
	},
	uniqueLoadings: {
		getServicesList: [],
	},
	data: {},
};

export const servicesSlice = createSlice({
	name: 'servicesSlice',
	initialState: initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		createAsyncCases(builder, getServicesList, {
			toastHandlingOptions: {
				fetchName: 'Список услуг',
				skipErrorToasting: {
					byStatusCode: 404,
				},
			},
		});
	},
});

export const servicesSliceCommon: SliceCommon = {
	reset: servicesSlice.actions.reset,
	sliceName: servicesSlice.name,
};
