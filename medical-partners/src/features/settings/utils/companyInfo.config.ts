import type { FormConfig } from '@core/types';
import { CompanyInfoScheme, RegCompanyInfoScheme } from './validation';

export const CompanyInfoFormConfig: FormConfig<typeof CompanyInfoScheme> = {
	schema: CompanyInfoScheme,
	defaultValues: {
		id: '',
		companyName: '',
		phoneNumber: '',
		unp: '',
		currentAccount: '',
		bik: '',
		directorFio: '',
		bankAddress: '',
		companyAddress: '',
		companyDescription: '',
	},
};

export const RegCompanyInfoFormConfig: FormConfig<typeof RegCompanyInfoScheme> = {
	schema: RegCompanyInfoScheme,
	defaultValues: {
		id: '',
		companyName: '',
		phoneNumber: '',
		unp: '',
		currentAccount: '',
		bik: '',
		directorFio: '',
		bankAddress: '',
		companyAddress: '',
		password: '',
		confirmPassword: '',
		companyDescription: '',
	},
};
