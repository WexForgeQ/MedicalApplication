import type { ActDto } from '@api-gen/api';
import type { Act } from '@features/acts/types/acts.types';

export const convertActToClient = (dto: ActDto): Act => {
	return {
		id: dto.id || '',
		publicId: dto.publicId ?? 0,
		checkNumber: dto.checkNumber ?? '',
		advertiserName: dto.advertiserName ?? '',
		creationDate: dto.creationDate ?? '',
	};
};

