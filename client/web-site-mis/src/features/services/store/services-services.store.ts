import { publicApi } from '@api-gen';
import type { ShortServiceDtoPaginatedList } from '@api-gen/api';
import { createServiceFuncWithConverter } from '@core/non-alias';
import type { GetPaginatedDataProps } from '@core/types';
import { convertGetPaginatedDataProps, convertPaginatedData } from '@core/utils';
import type { Service } from '../types';
import { convertService } from '../utils';

export const getServicesList = createServiceFuncWithConverter(
	'getServicesList',
	(props: GetPaginatedDataProps<Service, { specializationId: string }>) =>
		publicApi.service.paginatedCreate(convertGetPaginatedDataProps(props)),
	(data: ShortServiceDtoPaginatedList) => convertPaginatedData(data, convertService),
);

export type ServicesServiceKeys = 'getServicesList';
