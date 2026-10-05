import type { SpecializationDto } from '@api-gen/api';
import type { Specialization } from '@features/doctors/types';

export const convertSpecialization = (data: SpecializationDto): Specialization => ({
	id: data.id!,
	name: data.name!,
	pictureUrl: data.pictureUrl ?? '',
});
