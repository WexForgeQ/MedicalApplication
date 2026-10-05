import type { FormConfig } from '@core/types';
import { CompanyInfoScheme } from './validation';

export const CompanyInfoFormConfig: FormConfig<typeof CompanyInfoScheme> = {
	schema: CompanyInfoScheme,
	defaultValues: {
		id: '',
		companyName: null,
		phoneNumber: null,
		unp: null,
		currentAccount: null,
		bik: null,
		directorFio: null,
		bankAddress: null,
		companyAddress: null,
		companyDescription: null,
	},
};
