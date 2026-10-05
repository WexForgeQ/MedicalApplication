import { publicApi } from '@api-gen';
import type { DoctorDtoPaginatedList, SpecializationDtoPaginatedList } from '@api-gen/api';
import { createServiceFuncWithConverter } from '@core/non-alias';
import type { GetPaginatedDataProps } from '@core/types';
import { convertGetPaginatedDataProps, convertPaginatedData } from '@core/utils';
import type { Doctor, Specialization } from '../types';
import { convertDoctor, convertSpecialization, type DoctorsFiltersFormSchemeType } from '../utils';

export const getDoctorsList = createServiceFuncWithConverter(
	'getDoctorsList',
	(props: GetPaginatedDataProps<Doctor, DoctorsFiltersFormSchemeType>) =>
		publicApi.doctor.paginatedCreate(convertGetPaginatedDataProps(props)),
	(data: DoctorDtoPaginatedList) => convertPaginatedData(data, convertDoctor),
);

export const getSpecializationList = createServiceFuncWithConverter(
	'getSpecializationList',
	(props: GetPaginatedDataProps<Specialization, object>) =>
		publicApi.specialization.paginatedCreate(convertGetPaginatedDataProps(props)),
	(data: SpecializationDtoPaginatedList) => convertPaginatedData(data, convertSpecialization),
);

export type DoctorsServiceKeys = 'getDoctorsList' | 'getSpecializationList';
