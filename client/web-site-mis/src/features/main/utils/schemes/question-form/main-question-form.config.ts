import type { FormConfig } from '@core/types';
import { MainQuestionFormScheme } from './main-question-form.scheme';

export const MainQuestionFormConfig: FormConfig<typeof MainQuestionFormScheme> = {
	schema: MainQuestionFormScheme,
	defaultValues: {
		name: '',
		phoneNumber: '+375',
		email: '',
		question: '',
	},
};
