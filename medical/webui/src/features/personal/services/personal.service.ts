import { securedApi } from '@api-gen';
import type { DoctorDto } from '@api-gen/api';
import { convertPaginatedData } from '@core/constants';
import type { PaginatedData } from '@core/types';
import {
	createServiceFunc,
	createServiceFuncWithConverter,
} from '@core/utils/fetch/create-service-func.utils';
import { convertPersonalToClient, convertPersonalToServer } from '../constants/converters';
import type { Personal } from '../types';
import type { PersonalFormSchemeType } from '../utils';

export const getPersonal = createServiceFuncWithConverter(
	'getPersonal',
	(data: {
		pageSize: number;
		name?: string;
		pageNumber: number;
		office?: string;
		specializationId?: string;
	}) =>
		securedApi.doctor.paginatedCreate({
			pageSize: data.pageSize,
			pageNumber: data.pageNumber,
			office: data.office || undefined,
			specializationId: data.specializationId || undefined,
		}),
	(data: any) => convertPaginatedData(data as PaginatedData<Personal>, convertPersonalToClient),
);

export const getPersonalById = createServiceFuncWithConverter(
	'getPersonalById',
	(props: { id: string }) => securedApi.doctor.doctorList({ id: props.id }),
	(data: DoctorDto) => convertPersonalToClient(data),
);

export const addPersonal = createServiceFunc('addPersonal', (props: PersonalFormSchemeType) =>
	securedApi.doctor.doctorCreate(convertPersonalToServer(props)),
);

export const updatePersonal = createServiceFunc('updatePersonal', (props: PersonalFormSchemeType) =>
	securedApi.doctor.doctorUpdate(convertPersonalToServer(props)),
);

export const deletePersonal = createServiceFunc('deletePersonal', (props: { id: string }) =>
	securedApi.doctor.doctorDelete({ id: props.id }),
);

export type PersonalServicesKeys =
	| 'getPersonal'
	| 'getPersonalById'
	| 'addPersonal'
	| 'updatePersonal'
	| 'deletePersonal';
