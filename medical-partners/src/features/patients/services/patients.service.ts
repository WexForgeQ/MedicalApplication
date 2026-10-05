import { securedApi } from '@api-gen';
import { convertPaginatedData } from '@core/constants';
import type { PaginatedData } from '@core/types';
import {
	createServiceFunc,
	createServiceFuncWithConverter,
} from '@core/utils/fetch/create-service-func.utils';
import { convertPatientToClient } from '../constants/converters/patients.converter';
import type { Patient } from '../types';

export const deletePatient = createServiceFunc('deletePatient', (props: { id: string }) =>
	securedApi.api.advertiserDelete({ advertiserId: props.id }),
);

export const getPatients = createServiceFuncWithConverter(
	'getPatients',
	(data: { pageSize: number; name?: string; pageNumber: number }) =>
		securedApi.api.advertiserPaginatedCreate({
			pageSize: data.pageSize,
			pageNumber: data.pageNumber,
		}),
	(data: any) => convertPaginatedData(data as PaginatedData<Patient>, convertPatientToClient),
);

export type PatientServicesKeys = 'deletePatient' | 'getPatients';
