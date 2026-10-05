import { securedApi } from '@api-gen';
import { createServiceFunc } from '@core/utils/fetch/create-service-func.utils';
import type { CompanyInfoSchemeType } from '../utils';

export const getCompanyProfile = createServiceFunc('getCompanyProfile', (data: undefined) =>
	securedApi.api.companyInfoList(),
);

export const updateCompanyProfile = createServiceFunc(
	'updateCompanyProfile',
	(data: { data: CompanyInfoSchemeType }) => securedApi.api.companyInfoUpdate(data.data),
);

export type SettingsServicesKeys = 'getCompanyProfile' | 'updateCompanyProfile';
