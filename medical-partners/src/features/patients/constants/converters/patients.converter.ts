import type { AdvertiserDto } from '@api-gen/api';
import type { Patient } from '@features/patients/types';

export const convertPatientToClient = (dto: AdvertiserDto): Patient => {
	return {
		...dto,
		id: dto.id || '',
		directorFio: dto.directorFio || '',
		email: dto.email ?? '',
		phoneNumber: dto.phoneNumber ?? '',
	};
};
