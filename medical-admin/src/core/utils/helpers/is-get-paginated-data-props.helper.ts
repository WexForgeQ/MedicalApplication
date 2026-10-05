import type { GetPaginatedDataProps } from '@core/types';

export const isGetPaginatedDataProps = (arg: unknown): arg is GetPaginatedDataProps<any, any> => {
	if (typeof arg !== 'object' || arg === null) return false;

	const params = (arg as any).params;
	if (typeof params !== 'object' || params === null) return false;

	const hasPageNumber = typeof params.pageNumber === 'number';
	const hasPageSize = typeof params.pageSize === 'number';

	return hasPageNumber && hasPageSize;
};
