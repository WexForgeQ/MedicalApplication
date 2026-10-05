import type { CheckStatus, CheckType } from '@api-gen/api';

export interface Check {
	id?: string;
	checkNumber?: string | null;
	checkType?: CheckType;
	price?: number;
	status?: CheckStatus;
	advertiserName?: string | null;
	durationMonth?: number;
	createdAt?: string;
}

