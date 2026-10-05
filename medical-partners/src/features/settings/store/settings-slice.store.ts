import type { SliceCommon, SliceState } from '@core/types';
import { createAsyncCases } from '@core/utils/fetch/create-async-cases.utils';
import { createSlice } from '@reduxjs/toolkit';
import {
	getCompanyProfile,
	updateCompanyProfile,
	type SettingsServicesKeys,
} from '../services/settings.services';

const initialState: SliceState<object, SettingsServicesKeys> = {
	loadings: {
		updateCompanyProfile: false,
		getCompanyProfile: false,
	},
	data: {},
	uniqueLoadings: {
		updateCompanyProfile: [],
		getCompanyProfile: [],
	},
};

export const settingsSlice = createSlice({
	name: 'settingsSlice',
	initialState: initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		createAsyncCases(builder, updateCompanyProfile, {
			toastHandlingOptions: {
				fetchName: 'Компания',
				onSuccess: {
					successToastMessage: 'Успешное обновление',
					enableSuccessToast: true,
				},
			},
		});
		createAsyncCases(builder, getCompanyProfile);
	},
});

export const settingsSliceCommon: SliceCommon = {
	reset: settingsSlice.actions.reset,
	sliceName: settingsSlice.name,
};
