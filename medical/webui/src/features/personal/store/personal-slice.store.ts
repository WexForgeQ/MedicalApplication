import type { SliceCommon, SliceState } from '@core/types';
import { createAsyncCases } from '@core/utils/fetch';
import { createSlice } from '@reduxjs/toolkit';
import {
	addPersonal,
	deletePersonal,
	getPersonal,
	getPersonalById,
	updatePersonal,
	type PersonalServicesKeys,
} from '../services';

const initialState: SliceState<object, PersonalServicesKeys> = {
	loadings: {
		getPersonal: false,
		getPersonalById: false,
		updatePersonal: false,
		addPersonal: false,
		deletePersonal: false,
	},
	data: {},
	uniqueLoadings: {
		getPersonal: [],
		getPersonalById: [],
		updatePersonal: [],
		addPersonal: [],
		deletePersonal: [],
	},
};

export const personalSlice = createSlice({
	name: 'personalSlice',
	initialState: initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		createAsyncCases(builder, addPersonal, {
			toastHandlingOptions: {
				fetchName: 'Персонал',
				onSuccess: {
					successToastMessage: 'Успешное создание',
					enableSuccessToast: true,
				},
			},
		});
		createAsyncCases(builder, updatePersonal, {
			toastHandlingOptions: {
				fetchName: 'Персонал',
				onSuccess: {
					successToastMessage: 'Успешное редактирование',
					enableSuccessToast: true,
				},
			},
		});
		createAsyncCases(builder, deletePersonal, {
			toastHandlingOptions: {
				fetchName: 'Персонал',
				onSuccess: {
					successToastMessage: 'Успешное даление',
					enableSuccessToast: true,
				},
			},
		});
		createAsyncCases(builder, getPersonalById);
		createAsyncCases(builder, getPersonal);
	},
});

export const personalSliceCommon: SliceCommon = {
	reset: personalSlice.actions.reset,
	sliceName: personalSlice.name,
};
