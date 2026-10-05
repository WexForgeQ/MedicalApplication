import type { FormConfig } from '@core/types';
import { DoctorsFiltersFormScheme } from './doctors-filters-form.scheme';

export const DoctorsFiltersFormConfig: FormConfig<typeof DoctorsFiltersFormScheme> = {
	schema: DoctorsFiltersFormScheme,
	defaultValues: {
		specializationId: undefined,
		surname: undefined,
		office: undefined,
	},
};
