import type { TokenModel } from '@api-gen/api';
import type { SliceCommon, SliceState } from '@core/types';
import { createAsyncCases } from '@core/utils/fetch/create-async-cases.utils';
import { createSlice } from '@reduxjs/toolkit';
import { type AuthServicesKeys, login } from '../services';
import { AuthLocalStorage } from '../types';

const initialState: SliceState<object, AuthServicesKeys> = {
	loadings: {
		login: false,
	},
	data: {},
	uniqueLoadings: {
		login: [],
	},
};

export const authSlice = createSlice({
	name: 'authSlice',
	initialState: initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		createAsyncCases(builder, login, {
			onSuccess: (state, action) => {
				localStorage.setItem(
					AuthLocalStorage.Access,
					(action.payload.data as unknown as TokenModel).accessToken!,
				);
				localStorage.setItem(
					AuthLocalStorage.Refresh,
					(action.payload.data as unknown as TokenModel).refreshToken!,
				);
			},
			toastHandlingOptions: {
				fetchName: 'Авторизация',
				onSuccess: {
					successToastMessage: 'Успешный вход',
					enableSuccessToast: true,
				},
			},
		});
	},
});

export const authSliceCommon: SliceCommon = {
	reset: authSlice.actions.reset,
	sliceName: authSlice.name,
};
