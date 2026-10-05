import type { ShortServiceDto } from '@api-gen/api';
import { convertToClientNamedEntity } from '@core/utils';
import type { Service } from '@features/services/types';

export const convertService = (data: ShortServiceDto): Service => ({
	id: data.id!,
	price: data.price!,
	shortDescription: data.shortDescription!,
	specialization: convertToClientNamedEntity(data.specialization!),
	title: data.title!,
});
