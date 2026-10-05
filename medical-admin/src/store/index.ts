import { actsSlice } from '@features/acts/store';
import { authSlice } from '@features/auth/store';
import { checksSlice } from '@features/checks/store';
import { homeSlice } from '@features/home/store';
import { patientsSlice } from '@features/patients/store';
import { settingsSlice } from '@features/settings/store';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const rootReducer = combineReducers({
	homeSlice: homeSlice.reducer,
	authSlice: authSlice.reducer,
	actsSlice: actsSlice.reducer,
	checksSlice: checksSlice.reducer,
	patientsSlice: patientsSlice.reducer,
	settingsSlice: settingsSlice.reducer,
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
