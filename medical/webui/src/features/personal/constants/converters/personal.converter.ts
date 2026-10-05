import type { DoctorDto, UpdateDoctorCommand } from '@api-gen/api';
import type { Personal } from '@features/personal/types';
import type { PersonalFormSchemeType } from '@features/personal/utils';

export const convertPersonalToServer = (form: PersonalFormSchemeType): UpdateDoctorCommand => {
	const parts = form.fio.trim().split(/\s+/).filter(Boolean);
	const [surname, name, patronym] = parts;

	return {
		id: form.id || '',
		surname: surname ?? null,
		name: name ?? null,
		patronym: patronym ?? null,
		specializationId: form.specializationId || '',
		gender: form.gender ?? undefined,
		birthDay: form.dateOfBirth || undefined,
		phoneNumber: form.phoneNumber || null,
		mail: form.email || null,
		address: form.livingAdress || null,
		office: form.office || null,
		photoUrl: form.photoUrl || null,
	};
};

export const convertPersonalToClient = (dto: DoctorDto): Personal => {
	return {
		id: dto.id || '',
		fio: [dto.surname, dto.name, dto.patronym].filter(Boolean).join(' '),
		email: dto.mail ?? '',
		phoneNumber: dto.phoneNumber ?? '',
		dateOfBirth: dto.birthDay ?? '',
		livingAdress: dto.address ?? '',
		gender: dto.gender ?? undefined,
		speciality: dto.specialization
			? { id: dto.specialization.id!, name: dto.specialization.name! }
			: { id: '', name: '' },
		office: dto.office ?? '',
		photoUrl: dto.photoUrl ?? '',
	};
};
