import type { NewsArticleDto } from '@api-gen/api';
import type { Stock } from '@features/stocks/types';

export const convertStock = (data: NewsArticleDto): Stock => ({
	id: data.id!,
	date: data.date!,
	title: data.title!,
	description: data.description!,
	imageUrl: data.imageUrl!,
});
