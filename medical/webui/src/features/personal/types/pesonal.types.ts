import type { HumanEntity, NamedEntity } from '@core/types';

export interface Personal extends HumanEntity {
	id: string;
	speciality: NamedEntity;
	office: string;
	photoUrl: string;
}
