import { authSlice } from '@features/auth/store';
import { slotsSlice } from '@features/slots/store';
import { homeSlice } from '@features/home/store';
import { patientsSlice } from '@features/patients/store';
import { personalSlice } from '@features/personal/store';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const rootReducer = combineReducers({
	homeSlice: homeSlice.reducer,
	authSlice: authSlice.reducer,
	patientsSlice: patientsSlice.reducer,
	personalSlice: personalSlice.reducer,
	slotsSlice: slotsSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type SliceRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<SliceRootState> = useSelector;
export * from './slice-reset-reducers-list.store';
export * from './slice-selectors.store';
