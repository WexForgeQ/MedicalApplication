import { doctorsSlice } from '@features/doctors/store';
import { servicesSlice } from '@features/services/store';
import { stocksSlice } from '@features/stocks/store';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const rootReducer = combineReducers({
	doctorsSlice: doctorsSlice.reducer,
	stocksSlice: stocksSlice.reducer,
	servicesSlice: servicesSlice.reducer,
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
