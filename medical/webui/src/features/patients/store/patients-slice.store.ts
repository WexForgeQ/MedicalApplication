import type { SliceCommon, SliceState } from '@core/types';
import { createAsyncCases } from '@core/utils/fetch/create-async-cases.utils';
import { createSlice } from '@reduxjs/toolkit';
import {
	addPatient,
	deletePatient,
	getPatientById,
	getPatients,
	updatePatient,
	type PatientServicesKeys,
} from '../services';

const initialState: SliceState<object, PatientServicesKeys> = {
	loadings: {
		addPatient: false,
		deletePatient: false,
		updatePatient: false,
		getPatientById: false,
		getPatients: false,
	},
	data: {},
	uniqueLoadings: {
		addPatient: [],
		deletePatient: [],
		updatePatient: [],
		getPatientById: [],
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
		createAsyncCases(builder, addPatient, {
			toastHandlingOptions: {
				fetchName: 'Пациенты',
				onSuccess: {
					successToastMessage: 'Успешное создание',
					enableSuccessToast: true,
				},
			},
		});
		createAsyncCases(builder, updatePatient, {
			toastHandlingOptions: {
				fetchName: 'Пациенты',
				onSuccess: {
					successToastMessage: 'Успешное редактирование',
					enableSuccessToast: true,
				},
			},
		});
		createAsyncCases(builder, deletePatient, {
			toastHandlingOptions: {
				fetchName: 'Пациенты',
				onSuccess: {
					successToastMessage: 'Успешное даление',
					enableSuccessToast: true,
				},
			},
		});
		createAsyncCases(builder, getPatientById);
		createAsyncCases(builder, getPatients);
	},
});

export const patientsSliceCommon: SliceCommon = {
	reset: patientsSlice.actions.reset,
	sliceName: patientsSlice.name,
};
