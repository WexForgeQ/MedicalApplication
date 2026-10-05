import type {
	PaginatedData,
	SaveToSliceStateType,
	SliceState,
	ThunkPayloadType,
} from '@core/types';
import {
	getAsyncThunkFetchName,
	getErrorMessage,
	getSuccessMessage,
	isGetPaginatedDataProps,
} from '@core/utils';
import type { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit';
import type { Draft } from 'immer';
import { type ExternalToast, toast } from 'sonner';

interface ToastHandlingOptions<J extends object | void | undefined> {
	fetchName?: string;
	skipErrorToasting?: {
		byStatusCode?: number;
		all?: boolean;
	};
	toastOptions?: ExternalToast;
	onSuccess?: {
		successToastMessage?: string;
		enableSuccessToast?: boolean;
	};
	usePropsFieldForFetchName?: keyof J;
	useLoadingToast?: boolean;
}

export const createAsyncCases = <
	T extends object,
	K extends string,
	J extends object | void | undefined,
	F,
>(
	builder: ActionReducerMapBuilder<SliceState<T, K>>,
	asyncThunk: AsyncThunk<ThunkPayloadType<F>, J, any>,
	options?: {
		onSuccess?: (
			state: Draft<SliceState<T, K>>,
			action: ReturnType<typeof asyncThunk.fulfilled>,
		) => void;
		onError?: (
			state: Draft<SliceState<T, K>>,
			action: ReturnType<typeof asyncThunk.rejected>,
		) => void;
		onStart?: (
			state: Draft<SliceState<T, K>>,
			action: ReturnType<typeof asyncThunk.pending>,
		) => void;
		toastHandlingOptions?: ToastHandlingOptions<J>;
		skipLoading?: boolean;
		uniqueLoadingByPropsKey?: keyof J;
		autoSaveDataToSliceState?: {
			forPaginated?: Partial<Record<SaveToSliceStateType, keyof T>>;
			fieldName?: keyof T;
		};
		autoSaveAsynkThunkArgsToSliceState?: keyof T;
		dynamicPaginationOnLoading?: keyof T;
	},
) =>
	builder
		.addCase(asyncThunk.pending, (state: Draft<SliceState<T, K>>, action) => {
			const getPaginatedDataProps = isGetPaginatedDataProps(action.meta.arg)
				? action.meta.arg
				: undefined;
			if (!options?.skipLoading) {
				(state.loadings as any)[asyncThunk.typePrefix] = true;
				if (
					options?.uniqueLoadingByPropsKey &&
					typeof (action.meta.arg as any)[options?.uniqueLoadingByPropsKey] === 'string'
				) {
					(state.uniqueLoadings as any)[asyncThunk.typePrefix] = [
						...(state.uniqueLoadings as any)[asyncThunk.typePrefix],
						(action.meta.arg as any)[options?.uniqueLoadingByPropsKey],
					];
				}
				if (
					options?.toastHandlingOptions?.fetchName &&
					options.toastHandlingOptions.useLoadingToast
				) {
					(state.toasts as any)[asyncThunk.typePrefix] = toast.loading(
						getAsyncThunkFetchName({
							fetchName: options?.toastHandlingOptions?.fetchName,
							propsFieldName:
								options?.toastHandlingOptions?.usePropsFieldForFetchName,
							metaArg: action.meta.arg,
						}) || 'Неизвестное состояние',
						{ ...options?.toastHandlingOptions?.toastOptions, duration: Infinity },
					);
				}
				if (
					!!getPaginatedDataProps &&
					getPaginatedDataProps.params.pageNumber &&
					getPaginatedDataProps.params.pageNumber === 1 &&
					!!options?.dynamicPaginationOnLoading
				) {
					(state.data as any)[options?.dynamicPaginationOnLoading] = true;
				}
			}
			if (!!options?.autoSaveAsynkThunkArgsToSliceState) {
				(state.data as any)[options?.autoSaveAsynkThunkArgsToSliceState] = action.meta.arg;
			}
			if (options?.onStart) {
				options.onStart(state, action);
			}
		})
		.addCase(asyncThunk.fulfilled, (state: Draft<SliceState<T, K>>, action) => {
			const getPaginatedDataProps = isGetPaginatedDataProps(action.meta.arg)
				? action.meta.arg
				: undefined;
			if (
				!!options?.autoSaveDataToSliceState?.forPaginated &&
				!!getPaginatedDataProps &&
				!!getPaginatedDataProps?.saveToSliceState
			) {
				const data = action.payload.data! as unknown as PaginatedData<any>;
				switch (getPaginatedDataProps.saveToSliceState) {
					case 'fullData':
						(state.data as any)[
							options.autoSaveDataToSliceState.forPaginated.fullData
						] = data;
						break;
					case 'items':
						(state.data as any)[options?.autoSaveDataToSliceState.forPaginated.items] =
							data.items;
						break;
					case 'withDynemicPagination':
						(state.data as any)[
							options?.autoSaveDataToSliceState.forPaginated.withDynemicPagination
						] = {
							...data,
							items:
								data.pageNumber == 1
									? data.items
									: (state.data as any)[
											options?.autoSaveDataToSliceState.forPaginated
												.withDynemicPagination
										].items.concat(data.items),
						};
						break;
				}
			} else if (!!options?.autoSaveDataToSliceState?.fieldName && !getPaginatedDataProps) {
				(state.data as any)[options?.autoSaveDataToSliceState.fieldName] = action.payload
					.data! as any;
			}
			if (!options?.skipLoading) {
				(state.loadings as any)[asyncThunk.typePrefix] = false;
				if (
					options?.uniqueLoadingByPropsKey &&
					typeof (action.meta.arg as any)[options?.uniqueLoadingByPropsKey] === 'string'
				) {
					const copyArr = (
						(state.uniqueLoadings as any)[asyncThunk.typePrefix] as string[]
					).filter(
						(o) => o !== (action.meta.arg as any)[options?.uniqueLoadingByPropsKey],
					);
					(state.uniqueLoadings as any)[asyncThunk.typePrefix] = copyArr;
				}
				if (
					!!getPaginatedDataProps &&
					getPaginatedDataProps.params.pageNumber &&
					getPaginatedDataProps.params.pageNumber === 1 &&
					!!options?.dynamicPaginationOnLoading
				) {
					(state.data as any)[options?.dynamicPaginationOnLoading] = false;
				}
				if (
					state.toasts &&
					(state.toasts as any)?.[asyncThunk.typePrefix] &&
					options?.toastHandlingOptions?.fetchName &&
					options.toastHandlingOptions.useLoadingToast
				) {
					toast.dismiss((state.toasts as any)[asyncThunk.typePrefix] as string);
					(state.toasts as any)[asyncThunk.typePrefix] = '';
				}
			}
			if (options?.toastHandlingOptions?.onSuccess?.enableSuccessToast) {
				toast.success(
					getSuccessMessage({
						message: options.toastHandlingOptions.onSuccess.successToastMessage,
						fetchName: getAsyncThunkFetchName({
							fetchName: options?.toastHandlingOptions?.fetchName,
							propsFieldName:
								options?.toastHandlingOptions?.usePropsFieldForFetchName,
							metaArg: action.meta.arg,
						}),
					}),
					options?.toastHandlingOptions?.toastOptions,
				);
			}
			if (options?.onSuccess) {
				options.onSuccess(state, action);
			}
		})
		.addCase(asyncThunk.rejected, (state: Draft<SliceState<T, K>>, action) => {
			const payload = action.payload as ThunkPayloadType<F>;
			if (!action.payload) {
				toast.error(
					`Ошибка: ${JSON.stringify(action.error, null, 2)}`,
					options?.toastHandlingOptions?.toastOptions,
				);
				return;
			}
			if (!options?.skipLoading) {
				(state.loadings as any)[asyncThunk.typePrefix] = false;
				if (
					options?.uniqueLoadingByPropsKey &&
					typeof (action.meta.arg as any)[options?.uniqueLoadingByPropsKey] === 'string'
				) {
					const copyArr = (
						(state.uniqueLoadings as any)[asyncThunk.typePrefix] as string[]
					).filter(
						(o) => o !== (action.meta.arg as any)[options?.uniqueLoadingByPropsKey],
					);
					(state.uniqueLoadings as any)[asyncThunk.typePrefix] = copyArr;
				}
				const getPaginatedDataProps = isGetPaginatedDataProps(action.meta.arg)
					? action.meta.arg
					: undefined;
				if (
					!!getPaginatedDataProps &&
					getPaginatedDataProps.params.pageNumber &&
					!!options?.dynamicPaginationOnLoading
				) {
					(state.data as any)[options?.dynamicPaginationOnLoading] = false;
				}
				if (
					state.toasts &&
					(state.toasts as any)?.[asyncThunk.typePrefix] &&
					options?.toastHandlingOptions?.fetchName &&
					options.toastHandlingOptions.useLoadingToast
				) {
					toast.dismiss((state.toasts as any)[asyncThunk.typePrefix] as string);
					(state.toasts as any)[asyncThunk.typePrefix] = '';
				}
			}
			if (
				!options?.toastHandlingOptions?.skipErrorToasting?.all &&
				options?.toastHandlingOptions?.skipErrorToasting?.byStatusCode !== payload.status &&
				payload.error?.code !== 'ERR_CANCELED'
			)
				toast.error(
					getErrorMessage(
						payload.error,
						payload.status,
						getAsyncThunkFetchName({
							fetchName: options?.toastHandlingOptions?.fetchName,
							propsFieldName:
								options?.toastHandlingOptions?.usePropsFieldForFetchName,
							metaArg: action.meta.arg,
						}),
					),
					options?.toastHandlingOptions?.toastOptions,
				);
			if (options?.onError) {
				options.onError(state, action);
			}
		});
