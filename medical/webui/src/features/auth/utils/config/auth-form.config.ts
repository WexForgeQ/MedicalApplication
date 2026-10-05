import type { FormConfig } from '@core/types';
import { AuthFormScheme } from '../validation';

export const AuthFormConfig: FormConfig<typeof AuthFormScheme> = {
	schema: AuthFormScheme,
	defaultValues: {
		login: '',
		password: '',
	},
};
