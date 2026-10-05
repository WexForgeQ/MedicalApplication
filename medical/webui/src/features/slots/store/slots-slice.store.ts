import type { SliceCommon, SliceState } from '@core/types';
import { createAsyncCases } from '@core/utils/fetch/create-async-cases.utils';
import { createSlice } from '@reduxjs/toolkit';
import {
	addSlot,
	deleteAppointment,
	deleteSlot,
	getSlotById,
	getSlots,
	makeAppointment,
	updateSlot,
	type SlotServicesKeys,
} from '../services';

const initialState: SliceState<object, SlotServicesKeys> = {
	loadings: {
		addSlot: false,
		deleteSlot: false,
		updateSlot: false,
		getSlotById: false,
		getSlots: false,
		makeAppointment: false,
		deleteAppointment: false,
	},
	data: {},
	uniqueLoadings: {
		addSlot: [],
		deleteSlot: [],
		updateSlot: [],
		getSlotById: [],
		getSlots: [],
		makeAppointment: [],
		deleteAppointment: [],
	},
};

export const slotsSlice = createSlice({
	name: 'slotsSlice',
	initialState: initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		createAsyncCases(builder, addSlot, {
			toastHandlingOptions: {
				fetchName: 'Слоты',
				onSuccess: {
					successToastMessage: 'Успешное создание',
					enableSuccessToast: true,
				},
			},
		});
		createAsyncCases(builder, updateSlot, {
			toastHandlingOptions: {
				fetchName: 'Слоты',
				onSuccess: {
					successToastMessage: 'Успешное редактирование',
					enableSuccessToast: true,
				},
			},
		});
		createAsyncCases(builder, deleteSlot, {
			toastHandlingOptions: {
				fetchName: 'Слоты',
				onSuccess: {
					successToastMessage: 'Успешное удаление',
					enableSuccessToast: true,
				},
			},
		});
		createAsyncCases(builder, deleteAppointment, {
			toastHandlingOptions: {
				fetchName: 'Записи',
				onSuccess: {
					successToastMessage: 'Успешное удаление',
					enableSuccessToast: true,
				},
			},
		});
		createAsyncCases(builder, makeAppointment, {
			toastHandlingOptions: {
				fetchName: 'Слоты',
				onSuccess: {
					successToastMessage: 'Успешная запись',
					enableSuccessToast: true,
				},
			},
		});
		createAsyncCases(builder, getSlotById);
		createAsyncCases(builder, getSlots);
	},
});

export const slotsSliceCommon: SliceCommon = {
	reset: slotsSlice.actions.reset,
	sliceName: slotsSlice.name,
};
