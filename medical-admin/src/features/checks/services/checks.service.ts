import { securedApi } from '@api-gen';
import type { CheckDtoPaginatedList, CheckStatus } from '@api-gen/api';
import { convertPaginatedData } from '@core/constants';
import type { PaginatedData } from '@core/types';
import {
	createServiceFunc,
	createServiceFuncWithConverter,
} from '@core/utils/fetch/create-service-func.utils';
import { convertCheckToClient } from '../constants';
import type { Check } from '../types/checks.types';

export const getChecks = createServiceFuncWithConverter<
	{ pageSize: number; pageNumber: number },
	CheckDtoPaginatedList,
	PaginatedData<Check>
>(
	'getChecks',
	(data) =>
		securedApi.api.checkPaginatedCreate({
			pageSize: data.pageSize,
			pageNumber: data.pageNumber,
		}),
	(data) => convertPaginatedData(data as any, convertCheckToClient),
);

export const downloadCheckDocument = createServiceFunc(
	'downloadCheckDocument',
	(props: { id: string }) => securedApi.api.checkDownloadDocumentDetail(props.id),
);

export const deleteCheck = createServiceFunc('deleteCheck', (props: { checkId: string }) =>
	securedApi.api.checkDelete({ ...props }),
);

export const changeCheckStatus = createServiceFunc(
	'changeCheckStatus',
	(props: { checkId: string; newStatus: CheckStatus }) =>
		securedApi.api.checkChangeStatusToPaidUpdate({ ...props }),
);

export type CheckServicesKeys = 'getChecks' | 'changeCheckStatus';
