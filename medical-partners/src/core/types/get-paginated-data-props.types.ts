import type { SliceDataStateOrdering } from './store.types';

export type SaveToSliceStateType = 'items' | 'fullData' | 'withDynemicPagination';

export interface GetPaginatedDataProps<Entity extends object, Filters extends object> {
	params: {
		pageNumber: number;
		pageSize: number;
		ordering?: SliceDataStateOrdering<Entity>;
		filters?: Filters;
	};
	saveToSliceState?: SaveToSliceStateType;
}
