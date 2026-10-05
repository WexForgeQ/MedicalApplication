import type { NamedEntity } from '@core/types';

export interface ServicesListItemProps {
	title: string;
	linkTo: string;
}

export type ServicesListConfig = ServicesListItemProps[];

export interface Service {
	id: string;
	specialization: NamedEntity;
	title: string;
	shortDescription: string;
	price: number;
}
