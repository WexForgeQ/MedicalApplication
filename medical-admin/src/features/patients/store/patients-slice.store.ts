import type { SliceCommon, SliceState } from '@core/types';
import { createAsyncCases } from '@core/utils/fetch/create-async-cases.utils';
import { createSlice } from '@reduxjs/toolkit';
import { deletePatient, getPatients, type PatientServicesKeys } from '../services';

const initialState: SliceState<object, PatientServicesKeys> = {
	loadings: {
		deletePatient: false,
		getPatients: false,
	},
	data: {},
	uniqueLoadings: {
		deletePatient: [],
		getPatients: [],
	},
};

export const patientsSlice = createSlice({
	name: 'patientsSlice',
	initialState: initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		createAsyncCases(builder, deletePatient, {
			toastHandlingOptions: {
				fetchName: 'Клиенты',
				onSuccess: {
					successToastMessage: 'Успешное удаление',
					enableSuccessToast: true,
				},
			},
		});
		createAsyncCases(builder, getPatients);
	},
});

export const patientsSliceCommon: SliceCommon = {
	reset: patientsSlice.actions.reset,
	sliceName: patientsSlice.name,
};
