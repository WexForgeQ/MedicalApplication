import { publicApi } from '@api-gen';
import { NewsArticleType } from '@api-gen/api';
import { createServiceFuncWithConverter } from '@core/non-alias';
import type { GetPaginatedDataProps } from '@core/types';
import { convertGetPaginatedDataProps, convertPaginatedData } from '@core/utils';
import type { Stock } from '../types';
import { convertStock } from '../utils';

export const getStocksList = createServiceFuncWithConverter(
	'getStocksList',
	(props: GetPaginatedDataProps<Stock, object>) =>
		publicApi.newsArticle.paginatedCreate(
			convertGetPaginatedDataProps({
				...props,
				params: {
					...props.params,
					filters: {
						newsArticleType: NewsArticleType.Offers,
					},
				},
			}),
		),
	(data) => convertPaginatedData(data, convertStock),
);

export type StocksServicesKeys = 'getStocksList';
