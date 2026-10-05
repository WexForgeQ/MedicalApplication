import type { SliceCommon, SliceState } from '@core/types';
import { createAsyncCases } from '@core/utils/fetch/create-async-cases.utils';
import { createSlice } from '@reduxjs/toolkit';
import { getActs, type ActServicesKeys } from '../services';

const initialState: SliceState<object, ActServicesKeys> = {
	loadings: {
		getActs: false,
	},
	data: {},
	uniqueLoadings: {
		getActs: [],
	},
};

export const actsSlice = createSlice({
	name: 'actsSlice',
	initialState: initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		createAsyncCases(builder, getActs);
	},
});

export const actsSliceCommon: SliceCommon = {
	reset: actsSlice.actions.reset,
	sliceName: actsSlice.name,
};

