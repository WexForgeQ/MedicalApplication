import type { FormConfig } from '@core/types';
import { PatientFormScheme } from './validation';

export const PatientFormConfig: FormConfig<typeof PatientFormScheme> = {
	schema: PatientFormScheme,
	defaultValues: {
		id: '',
		fio: '',
		email: '',
		phoneNumber: '',
	},
};
