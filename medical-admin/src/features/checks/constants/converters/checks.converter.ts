import type { CheckDto } from '@api-gen/api';
import type { Check } from '@features/checks/types/checks.types';

export const convertCheckToClient = (dto: CheckDto): Check => {
	return {
		id: dto.id || '',
		checkNumber: dto.checkNumber ?? '',
		checkType: dto.checkType,
		price: dto.price ?? 0,
		status: dto.status,
		advertiserName: dto.advertiserName ?? '',
		durationMonth: dto.durationMonth ?? 0,
		createdAt: dto.createdAt ?? '',
	};
};

