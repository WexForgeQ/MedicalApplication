export interface PaginatedData<T> {
	items: T[];
	pageNumber: number;
	totalPages: number;
	totalCount: number;
	pageSize: number;
	hasPreviousPage: boolean;
	hasNextPage: boolean;
}

export const enum SortOrder {
	Desc = 1,
	Asc = 0,
}

export interface NamedEntity {
	id: string;
	name: string;
}

export interface ServerPaginatedData<T> {
	items?: T[] | null;
	pageNumber?: number;
	totalPages?: number;
	totalCount?: number;
	pageSize?: number;
	hasPreviousPage?: boolean;
	hasNextPage?: boolean;
}

export interface HumanEntity {
	email: string;
	dateOfBirth: string;
	phoneNumber: string;
	livingAdress: string;
	gender?: boolean;
	fio: string;
}
