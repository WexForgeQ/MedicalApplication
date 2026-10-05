import type { SliceCommon, SliceState } from '@core/types';
import { createAsyncCases } from '@core/utils/fetch/create-async-cases.utils';
import { createSlice } from '@reduxjs/toolkit';
import { deleteCheck, getChecks, type CheckServicesKeys } from '../services';

const initialState: SliceState<object, CheckServicesKeys> = {
	loadings: {
		getChecks: false,
		changeCheckStatus: false,
	},
	data: {},
	uniqueLoadings: {
		getChecks: [],
		changeCheckStatus: [],
	},
};

export const checksSlice = createSlice({
	name: 'checksSlice',
	initialState: initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		createAsyncCases(builder, getChecks);
		createAsyncCases(builder, deleteCheck, {
			toastHandlingOptions: {
				fetchName: 'Счета',
				onSuccess: {
					successToastMessage: 'Успешное удаление',
					enableSuccessToast: true,
				},
			},
		});
	},
});

export const checksSliceCommon: SliceCommon = {
	reset: checksSlice.actions.reset,
	sliceName: checksSlice.name,
};
