import type { HumanEntity } from '@core/types';
import type { PatientFormSchemeType } from '../utils';

export interface Patient extends HumanEntity {
	id?: string;
	chronicDiseaseData?: string;
}

export type PatientFormType = PatientFormSchemeType;
