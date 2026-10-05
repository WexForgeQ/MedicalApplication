import {
	type GetPaginatedDataProps,
	type ServerOrdering,
	type SliceDataStateOrdering,
} from '@core/types';
import { convertSortOrder } from './default-from-server.converter';

export const convertSortOrdering = <T extends object>(
	data: SliceDataStateOrdering<T>,
): ServerOrdering =>
	!data
		? {}
		: {
				ordering: data.ordering as string,
				sortOrder: convertSortOrder.toServer[data.sortOrder],
			};

export const convertGetPaginatedDataProps = <
	Entity extends object,
	ClientFilters extends object,
	ServerFilters,
>(
	props: GetPaginatedDataProps<Entity, ClientFilters>,
	addtitonal?: {
		filtersConverter?: (filters?: ClientFilters) => ServerFilters;
		orderingConverter?: (ordering: SliceDataStateOrdering<Entity>) => ServerOrdering;
	},
) => {
	const filters = !!addtitonal?.filtersConverter
		? addtitonal.filtersConverter(props.params.filters)
		: props.params.filters
			? props.params.filters
			: {};
	const ord = !!props.params.ordering
		? !!addtitonal?.orderingConverter
			? addtitonal.orderingConverter(props.params.ordering)
			: convertSortOrdering(props.params.ordering)
		: {};
	return {
		pageNumber: props.params.pageNumber,
		pageSize: props.params.pageSize,
		...ord,
		...filters,
	} as {
		pageNumber: number;
		pageSize: number;
		ordering: ServerOrdering['ordering'];
		sortOrder: ServerOrdering['sortOrder'];
	} & typeof filters;
};
