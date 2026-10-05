import { AuthLocalStorage } from '@features/auth/types';
import { AxiosError, type AxiosInstance, type AxiosRequestConfig } from 'axios';
import { Api } from './api';

const controllerMap = new Map<string, AbortController>();

const getRequestKey = (config: AxiosRequestConfig): string =>
	`${config.method!.toUpperCase()}|${config.url!}|params:${JSON.stringify(config.params || {})}|data:${JSON.stringify(config.data || {})}`;

const abortAllRequests = () => {
	for (const [, controller] of controllerMap.entries()) {
		controller.abort();
	}
	controllerMap.clear();
};

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

			const originalRequest = error.config;
			const requestUrl = originalRequest?.url ?? '';
			if (requestUrl.includes('/Auth/refresh-token')) {
				return Promise.reject(
					new AxiosError('Пользователь не авторизован', undefined, undefined, null, {
						status: 401,
						statusText: 'Unauthorized',
						headers: {},
						config: error.config,
						data: null,
					}),
				);
			}
			if (error.response?.status === 401 && !originalRequest._retry) {
				originalRequest._retry = true;
				try {
					const refreshToken = localStorage.getItem(AuthLocalStorage.Refresh);
					const accessToken = localStorage.getItem(AuthLocalStorage.Access);
					if (!refreshToken) {
						return Promise.reject(
							new AxiosError(
								'Пользователь не авторизован',
								undefined,
								undefined,
								null,
								{
									status: 401,
									statusText: 'Unauthorized',
									headers: {},
									config: error.config,
									data: null,
								},
							),
						);
					}

					const { data } = await publicApi.api.adminAuthRefreshTokenCreate({
						refreshToken,
						accessToken,
					});

					localStorage.setItem(AuthLocalStorage.Access, data.accessToken!);
					localStorage.setItem(AuthLocalStorage.Refresh, data.refreshToken!);

					originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
					return securedApi.instance(originalRequest);
				} catch (refreshError) {
					abortAllRequests();
					return Promise.reject(refreshError);
				}
			}

			return Promise.reject(error);
		},
	);
};

export const publicApi = new Api({
	baseURL: process.env.REACT_APP_API_URL,
	withCredentials: true,
});

export const securedApi = new Api({
	baseURL: process.env.REACT_APP_API_URL,
	withCredentials: true,
});

securedApi.instance.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem(AuthLocalStorage.Access)}`;
	return config;
});

addAbortInterceptor(publicApi.instance);
addAbortInterceptor(securedApi.instance);

removeAbortInterceptor(publicApi.instance);
removeAbortInterceptor(securedApi.instance);

export * from './api-urls';
