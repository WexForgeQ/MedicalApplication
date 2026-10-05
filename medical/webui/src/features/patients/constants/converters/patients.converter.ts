import type { RegisterUserCommand, UpdateUserCommand, UserDto } from '@api-gen/api';
import type { PatientFormSchemeType } from '@features/patients/utils';

export const convertPatientToServer = (
	form: PatientFormSchemeType,
): RegisterUserCommand | UpdateUserCommand => {
	const [surname, firstName, patronym] = form.fio.split(' ');

	return {
		id: form.id,
		name: firstName ?? null,
		surname: surname ?? null,
		patronym: patronym ?? null,
		gender: form.gender,
		mail: form.email,
		birthDay: form.dateOfBirth,
		phoneNumber: form.phoneNumber,
		address: form.livingAdress,
		chronicDiseaseData: form.chronicDiseaseData ?? null,
	};
};

export const convertPatientToClient = (dto: UserDto): PatientFormSchemeType => {
	return {
		id: dto.id || '',
		fio: [dto.surname, dto.name, dto.patronym].filter(Boolean).join(' '),
		email: dto.mail ?? '',
		phoneNumber: dto.phoneNumber ?? '',
		dateOfBirth: dto.birthDay ?? '',
		livingAdress: dto.address ?? '',
		chronicDiseaseData: dto.chronicDiseaseData ?? '',
		gender: dto.gender,
	};
};
