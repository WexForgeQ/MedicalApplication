import { securedApi } from '@api-gen';
import type { UserDto } from '@api-gen/api';
import { convertPaginatedData } from '@core/constants';
import type { PaginatedData } from '@core/types';
import {
	createServiceFunc,
	createServiceFuncWithConverter,
} from '@core/utils/fetch/create-service-func.utils';
import {
	convertPatientToClient,
	convertPatientToServer,
} from '../constants/converters/patients.converter';
import type { PatientFormType } from '../types';

export const addPatient = createServiceFunc('addPatient', (props: PatientFormType) =>
	securedApi.user.userCreate(convertPatientToServer(props)),
);

export const updatePatient = createServiceFunc('updatePatient', (props: PatientFormType) =>
	securedApi.user.userUpdate(convertPatientToServer(props)),
);

export const deletePatient = createServiceFunc('deletePatient', (props: { id: string }) =>
	securedApi.user.userDelete({ userId: props.id }),
);

export const getPatients = createServiceFuncWithConverter(
	'getPatients',
	(data: { pageSize: number; name?: string; pageNumber: number; phoneNumber?: string }) =>
		securedApi.user.getPaginatedCreate({
			pageSize: data.pageSize,
			pageNumber: data.pageNumber,
			phoneNumber: data.phoneNumber,
		}),
	(data: any) =>
		convertPaginatedData(data as PaginatedData<PatientFormType>, convertPatientToClient),
);

export const getPatientById = createServiceFuncWithConverter(
	'getPatientById',
	(props: { id: string }) => securedApi.user.userList({ userId: props.id }),
	(data: UserDto) => convertPatientToClient(data),
);

export type PatientServicesKeys =
	| 'addPatient'
	| 'updatePatient'
	| 'deletePatient'
	| 'getPatientById'
	| 'getPatients';
