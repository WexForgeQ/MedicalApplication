import type {
	ActionCreatorWithoutPayload,
	ActionCreatorWithPayload,
	Draft,
	PayloadAction,
} from '@reduxjs/toolkit';
import type { SliceRootState } from '@store';
import type { SortOrder } from './data-types';
import type { NestedKeyOf } from './nested-key-of.types';

export interface SliceCommon {
	reset: ActionCreatorWithoutPayload<any>;
	sliceName: keyof SliceRootState;
}

export interface StoreSliceReducerAction<T extends object> {
	type: string;
	payload: T[keyof T];
}

export interface Ordering<T extends object> {
	ordering: NestedKeyOf<T>;
	sortOrder: SortOrder;
}

export type SliceDataStateOrdering<T extends object> = Ordering<T> | null;

export type SliceStateToasts<K extends string> = Partial<Record<K, string | number>>;

export type SliceStateUniqueLoadings<K extends string> = Record<K, string[]>;

export interface SliceState<T extends object, K extends string> {
	loadings: Record<K, boolean>;
	data: T;
	toasts?: SliceStateToasts<K>;
	uniqueLoadings: SliceStateUniqueLoadings<K>;
}

export interface SliceCommon {
	reset: ActionCreatorWithoutPayload<any>;
	sliceName: keyof SliceRootState;
}

export interface ThunkPayloadAPIError {
	code: string;
	message: string;
}

export interface ThunkPayloadType<T> {
	status: number;
	data: T | null;
	error: ThunkPayloadAPIError | null;
}

export interface SliceStateAction<T extends object, K extends string, J> {
	action: ActionCreatorWithPayload<J, string>;
	fieldName: keyof T;
	handler?: (state: Draft<SliceState<T, K>>, action: PayloadAction<J>) => void;
}
