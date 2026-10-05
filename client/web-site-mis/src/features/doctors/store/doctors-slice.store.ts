import { createAsyncCases } from '@core/non-alias';
import type { SliceCommon, SliceState } from '@core/types';
import { createSlice } from '@reduxjs/toolkit';
import type { DoctorsSliceDataState } from '../types';
import {
	type DoctorsServiceKeys,
	getDoctorsList,
	getSpecializationList,
} from './doctors-services.store';

const initialState: SliceState<DoctorsSliceDataState, DoctorsServiceKeys> = {
	loadings: {
		getDoctorsList: false,
		getSpecializationList: false,
	},
	uniqueLoadings: {
		getDoctorsList: [],
		getSpecializationList: [],
	},
	data: {
		lastGetDoctorsProps: null,
	},
};

export const doctorsSlice = createSlice({
	name: 'doctorsSlice',
	initialState: initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		createAsyncCases(builder, getDoctorsList, {
			toastHandlingOptions: {
				fetchName: 'Список врачей',
				skipErrorToasting: {
					byStatusCode: 404,
				},
			},
			autoSaveAsynkThunkArgsToSliceState: 'lastGetDoctorsProps',
		});
		createAsyncCases(builder, getSpecializationList, {
			toastHandlingOptions: {
				fetchName: 'Список специализаций',
				skipErrorToasting: {
					byStatusCode: 404,
				},
			},
		});
	},
});

export const doctorsSliceCommon: SliceCommon = {
	reset: doctorsSlice.actions.reset,
	sliceName: doctorsSlice.name,
};
