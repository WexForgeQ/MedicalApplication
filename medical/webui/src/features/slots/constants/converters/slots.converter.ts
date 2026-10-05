import {
	SlotStatus as ServerSlotStatus,
	type CreateSlotCommand,
	type SlotDto,
	type UpdateSlotCommand,
} from '@api-gen/api';
import { createDataRecordConverter } from '@core/non-alias/helpers';
import { format } from '@core/utils';
import { convertPatientToClient } from '@features/patients/constants/converters';
import { convertPersonalToClient } from '@features/personal/constants/converters';
import type { SlotFormType } from '@features/slots/types';
import { SlotStatus as ClientSlotStatus, type Slot } from '@features/slots/types';

export const slotStatusMap = createDataRecordConverter({
	[ClientSlotStatus.Free]: ServerSlotStatus.Free,
	[ClientSlotStatus.Occupied]: ServerSlotStatus.Occupied,
});

export const convertToServerSlotStatus = (status: ClientSlotStatus): ServerSlotStatus => {
	return slotStatusMap.toServer[status];
};

export const convertToClientSlotStatus = (status: ServerSlotStatus): ClientSlotStatus => {
	return slotStatusMap.toClient[status];
};

export const convertSlotToServer = (form: SlotFormType): CreateSlotCommand | UpdateSlotCommand => {
	const timeValue = form.time.includes(':') ? form.time : `${form.time}:00`;
	const timeParts = timeValue.split(':');

	const dateTimeString = `${format(form.date, 'yyyy-MM-dd')}T${timeParts[0]}:${timeParts[1] || '00'}:00`;
	const dateTime = new Date(dateTimeString);

	const result = {
		slotId: form.id || undefined,
		doctorId: form.doctorId,
		dateTime: dateTime.toISOString(),
	};

	return result;
};

export const convertSlotToClient = (dto: SlotDto): Slot | null => {
	if (!dto.doctor || !dto.dateTime) {
		return null;
	}

	const dateTime = new Date(dto.dateTime);
	const date = new Date(dateTime);

	const time = `${String(dateTime.getHours()).padStart(2, '0')}:${String(
		dateTime.getMinutes(),
	).padStart(2, '0')}`;

	return {
		id: dto.id || '',
		appointmentType: dto.appointment?.appointmentType,
		doctor: convertPersonalToClient(dto.doctor),
		patient: dto.appointment?.user ? convertPatientToClient(dto.appointment.user) : undefined,
		date,
		time,
		status: dto.slotStatus ? convertToClientSlotStatus(dto.slotStatus) : ClientSlotStatus.Free,
		appoitnmentId: dto.appointment?.id,
	};
};
