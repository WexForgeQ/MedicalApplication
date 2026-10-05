import type { SelectOption } from '@core';
import type { Patient } from '@features/patients';
import type { Personal } from '@features/personal';
import type {
	AppointmentFormSchemeType,
	SlotFormSchemeType,
} from '../utils/validation/slots.validation';

export enum AppointmentType {
	Primary = 'Primary',
	Repeated = 'Repeated',
	Preventive = 'Preventive',
	Referral = 'Referral',
}

export enum SlotStatus {
	Free = 'Free',
	Occupied = 'Occupied',
}

export interface Slot {
	id: string;
	doctor: Personal;
	patient?: Patient;
	date: Date;
	time: string;
	status: SlotStatus;
	appointmentType?: AppointmentType;
	appoitnmentId?: string;
}

export const AppointmentTypeSelectValues: SelectOption[] = [
	{
		label: 'Первичный',
		value: AppointmentType.Primary,
	},
	{
		label: 'Повторный',
		value: AppointmentType.Repeated,
	},
	{
		label: 'Профилактический',
		value: AppointmentType.Preventive,
	},
	{
		label: 'По направлению',
		value: AppointmentType.Referral,
	},
];

export type SlotFormType = SlotFormSchemeType;
export type AppointmentFormType = AppointmentFormSchemeType;
