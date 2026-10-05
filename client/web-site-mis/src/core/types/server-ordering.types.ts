import type { SortOrder } from '@api-gen/api';

export type ServerOrdering = {
	ordering?: string | null;
	sortOrder?: SortOrder;
};

export type OrderFieldsMap<T extends string> = Partial<Record<T, string>>;
