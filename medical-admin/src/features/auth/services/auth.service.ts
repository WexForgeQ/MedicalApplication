import { publicApi } from '@api-gen';
import { createServiceFunc } from '@core/utils/fetch/create-service-func.utils';
import type { AuthData } from '../types';

export const login = createServiceFunc('login', (props: AuthData) =>
	publicApi.api.adminAuthLoginCreate(props),
);

export type AuthServicesKeys = 'login';
