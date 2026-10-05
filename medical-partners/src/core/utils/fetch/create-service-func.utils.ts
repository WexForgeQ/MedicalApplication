import type { ThunkPayloadType } from '@core/types';
import { type AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, type AxiosResponse } from 'axios';

export const createServiceFunc = <Params, FetchResult>(
	typePrefix: string,
	fetchCallback: (params: Params) => Promise<AxiosResponse<FetchResult>>,
): AsyncThunk<ThunkPayloadType<FetchResult>, Params, any> => {
	return createAsyncThunk(typePrefix, async (params: Params, thunkAPI) => {
		const res: ThunkPayloadType<FetchResult> = {
			data: null,
			status: -1,
			error: null,
		};
		try {
			const response = await fetchCallback(params);
			return {
				...res,
				status: response.status,
				data: response.data,
			} as ThunkPayloadType<FetchResult>;
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error instanceof AxiosError
					? {
							...res,
							error: {
								message:
									typeof error.response?.data === 'string'
										? error.response?.data
										: error.message,
								code: error.code || '',
							},
							status: error.status || -1,
						}
					: { ...res, error: null },
			);
		}
	});
};

export const createServiceFuncWithConverter = <Params, FetchResult, DataType>(
	typePrefix: string,
	fetchCallback: (params: Params) => Promise<AxiosResponse<FetchResult>>,
	converter: (data: FetchResult) => DataType,
): AsyncThunk<ThunkPayloadType<DataType>, Params, any> => {
	return createAsyncThunk(typePrefix, async (params: Params, thunkAPI) => {
		const res: ThunkPayloadType<DataType> = {
			data: null,
			status: -1,
			error: null,
		};
		try {
			const response = await fetchCallback(params);
			return {
				...res,
				status: response.status,
				data: converter(response.data),
			} as ThunkPayloadType<DataType>;
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error instanceof AxiosError
					? {
							...res,
							error: {
								message:
									typeof error.response?.data === 'string'
										? error.response?.data
										: error.message,
								code: error.code || '',
							},
							status: error.status || -1,
						}
					: { ...res, error: null },
			);
		}
	});
};
