import type { NamedEntity } from '@core/types';

export interface Doctor {
	id: string;
	name: string;
	patronym: string;
	surname: string;
	gender: boolean;
	birthDay: string;
	phoneNumber: string;
	mail: string;
	address: string;
	specialization: NamedEntity;
	office: string;
	photoUrl: string;
}
