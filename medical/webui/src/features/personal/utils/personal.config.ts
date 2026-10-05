import type { FormConfig } from '@core/types';
import { PersonalFormScheme } from './validation';

export const PersonalFormConfig: FormConfig<typeof PersonalFormScheme> = {
	schema: PersonalFormScheme,
	defaultValues: {
		id: '',
		fio: '',
		email: '',
		phoneNumber: '',
		dateOfBirth: '',
		livingAdress: '',
		specializationId: '',
		office: '',
		photoUrl: '',
	},
};
