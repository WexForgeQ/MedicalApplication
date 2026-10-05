import { securedApi } from '@api-gen';
import type { ActDtoPaginatedList } from '@api-gen/api';
import { convertPaginatedData } from '@core/constants';
import type { PaginatedData } from '@core/types';
import {
	createServiceFunc,
	createServiceFuncWithConverter,
} from '@core/utils/fetch/create-service-func.utils';
import { convertActToClient } from '../constants';
import type { Act } from '../types/acts.types';

export const getActs = createServiceFuncWithConverter<
	{ pageSize: number; pageNumber: number },
	ActDtoPaginatedList,
	PaginatedData<Act>
>(
	'getActs',
	(data) =>
		securedApi.api.actPaginatedCreate({
			pageSize: data.pageSize,
			pageNumber: data.pageNumber,
		}),
	(data) => convertPaginatedData(data as any, convertActToClient),
);

export const downloadActDocument = createServiceFunc(
	'downloadActDocument',
	(props: { id: string }) => securedApi.api.actDownloadDocumentDetail(props.id),
);

export type ActServicesKeys = 'getActs';
