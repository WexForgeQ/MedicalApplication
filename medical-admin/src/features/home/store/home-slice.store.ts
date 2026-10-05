import { createActionsCases } from '@core/non-alias/helpers';
import type { SliceCommon, SliceState } from '@core/types';
import { createSlice } from '@reduxjs/toolkit';
import type { HomeSliceDataState } from '../types';
import { setIsSidebarOpen } from './home-slice-actions.store';

const initialState: SliceState<HomeSliceDataState, any> = {
	data: {
		isSidebarOpen: false,
	},
	loadings: {},
	uniqueLoadings: {},
};

export const homeSlice = createSlice({
	name: 'homeSlice',
	initialState: initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		createActionsCases(builder, [
			{
				action: setIsSidebarOpen,
				fieldName: 'isSidebarOpen',
			},
		]);
	},
});

export const homeSliceCommon: SliceCommon = {
	reset: homeSlice.actions.reset,
	sliceName: homeSlice.name,
};
