import { publicApi } from '@api-gen';
import { createServiceFunc } from '@core/utils/fetch/create-service-func.utils';
import type { CompanyInfoSchemeType } from '@features/settings/utils';
import type { AuthData } from '../types';

export const login = createServiceFunc('login', (props: AuthData) =>
	publicApi.api.advertiserLoginCreate(props),
);

export const registration = createServiceFunc('registration', (props: CompanyInfoSchemeType) =>
	publicApi.api.companyInfoCreate(props),
);

export type AuthServicesKeys = 'login' | 'registration';
