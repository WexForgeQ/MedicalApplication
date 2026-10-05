import type { DoctorDto } from '@api-gen/api';
import { convertToClientNamedEntity } from '@core/utils';
import type { Doctor } from '@features/doctors/types';

export const convertDoctor = (data: DoctorDto): Doctor => ({
	id: data.id!,
	name: data.name!,
	patronym: data.patronym!,
	surname: data.surname!,
	gender: data.gender!,
	birthDay: data.birthDay!,
	phoneNumber: data.phoneNumber!,
	mail: data.mail!,
	address: data.address!,
	specialization: convertToClientNamedEntity(data.specialization!),
	office: data.office!,
	photoUrl: data.photoUrl!,
});
