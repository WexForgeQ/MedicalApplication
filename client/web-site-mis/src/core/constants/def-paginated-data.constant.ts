import type { PaginatedData } from '@core/types';

export const defPaginatedData: PaginatedData<any> = {
	totalCount: 0,
	totalPages: 0,
	pageNumber: 1,
	pageSize: 0,
	items: [],
	hasNextPage: false,
	hasPreviousPage: false,
};
