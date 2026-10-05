import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Api } from './api';
import { API_URL } from './api-urls';

const controllerMap = new Map<string, AbortController>();

const getRequestKey = (config: AxiosRequestConfig): string =>
	`${config.method!.toUpperCase()}|${config.url!}|params:${JSON.stringify(config.params || {})}|data:${JSON.stringify(config.data || {})}`;

const addAbortInterceptor = (axiosInstance: AxiosInstance) => {
	axiosInstance.interceptors.request.use((config) => {
		const requestKey = getRequestKey(config);

		const existingController = controllerMap.get(requestKey);
		if (existingController) existingController.abort();

		const newController = new AbortController();
		config.signal = newController.signal;
		controllerMap.set(requestKey, newController);

		return config;
	});
};

const removeAbortInterceptor = (axiosInstance: AxiosInstance) => {
	axiosInstance.interceptors.response.use(
		(response) => {
			const urlKey = getRequestKey(response.config);
			controllerMap.delete(urlKey);
			return response;
		},
		async (error) => {
			const urlKey = getRequestKey(error.config);
			controllerMap.delete(urlKey);
			return Promise.reject(error);
		},
	);
};

export const publicApi = new Api({
	baseURL: API_URL,
	withCredentials: true,
});

addAbortInterceptor(publicApi.instance);
removeAbortInterceptor(publicApi.instance);
export * from './api-urls';
