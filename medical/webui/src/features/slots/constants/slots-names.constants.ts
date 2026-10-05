import { AppointmentType, SlotStatus } from '@features/slots/types';

export const AppointmentTypeNames: Record<AppointmentType, string> = {
	[AppointmentType.Primary]: 'Первичный',
	[AppointmentType.Repeated]: 'Повторный',
	[AppointmentType.Preventive]: 'Профилактический',
	[AppointmentType.Referral]: 'По направлению',
};

export const SlotStatusNames: Record<SlotStatus, string> = {
	[SlotStatus.Free]: 'Свободен',
	[SlotStatus.Occupied]: 'Занят',
};
