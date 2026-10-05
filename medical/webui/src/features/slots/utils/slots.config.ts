import type { FormConfig } from '@core/types';
import { AppointmentFormScheme, SlotFormScheme } from './validation';

export const SlotFormConfig: FormConfig<typeof SlotFormScheme> = {
	schema: SlotFormScheme,
	defaultValues: {
		id: '',
		doctorId: '',
		specializationId: '',
		office: '',
		date: '',
		time: '',
	},
};

export const AppointmentFormConfig: FormConfig<typeof AppointmentFormScheme> = {
	schema: AppointmentFormScheme,
	defaultValues: {
		userId: '',
		userName: '',
		phoneNumber: '',
		appointmentType: '',
	},
};
