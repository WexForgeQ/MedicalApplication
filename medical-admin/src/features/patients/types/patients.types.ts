import type { PatientFormSchemeType } from '../utils';

export interface Patient {
	id?: string;
	publicId?: number;
	phoneNumber?: string | null;
	companyName?: string | null;
	email?: string | null;
	directorFio?: string | null;
	companyAddress?: string | null;
	unp?: string | null;
	currentAccount?: string | null;
	bik?: string | null;
	bankAddress?: string | null;
	companyDescription?: string | null;
}

export type PatientFormType = PatientFormSchemeType;
