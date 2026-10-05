import { securedApi } from '@api-gen';
import { convertPaginatedData, convertToClientNamedEntity } from '@core/constants';
import type { NamedEntity, PaginatedData } from '@core/types';
import { createServiceFunc, createServiceFuncWithConverter } from '@core/utils/fetch';

export const getSpecializations = createServiceFuncWithConverter(
	'getSpecializations',
	(data: { pageSize: number; name?: string; pageNumber: number }) =>
		securedApi.specialization.paginatedCreate({
			pageSize: data.pageSize,
			pageNumber: data.pageNumber,
		}),
	(data: any) =>
		convertPaginatedData(data as PaginatedData<NamedEntity>, convertToClientNamedEntity),
);

export const uploadFile = createServiceFunc('uploadFile', (data: { mimeType: string }) =>
	securedApi.file.fileCreate(data),
);

export type HomeServicesKeys = 'getSpecializations' | 'uploadFile';
