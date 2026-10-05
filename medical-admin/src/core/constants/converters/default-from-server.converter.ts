import { type NamedEntityDto, SortOrder } from '@api-gen/api';
import { createDataRecordConverter } from '@core/non-alias/helpers';
import {
	SortOrder as ClientSortOrder,
	type NamedEntity,
	type PaginatedData,
	type ServerPaginatedData,
} from '@core/types';

export const convertSortOrder = createDataRecordConverter({
	[ClientSortOrder.Asc]: SortOrder.Asc,
	[ClientSortOrder.Desc]: SortOrder.Desc,
});

export const convertToClientNamedEntity = (data: NamedEntityDto): NamedEntity => ({
	id: data.id!,
	name: data.name ?? '',
});

export const convertPaginatedData = <T, K>(
	data: ServerPaginatedData<K>,
	itemConverter: (data: K) => T,
): PaginatedData<T> => ({
	pageNumber: data.pageNumber!,
	pageSize: data.pageSize!,
	totalPages: data.totalPages!,
	totalCount: data.totalCount!,
	hasNextPage: data.hasNextPage!,
	hasPreviousPage: data.hasPreviousPage!,
	items: data.items ? data.items.map(itemConverter) : [],
});
