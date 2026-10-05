import { securedApi } from '@api-gen';
import type { SlotDto } from '@api-gen/api';
import { convertPaginatedData } from '@core/constants';
import type { PaginatedData } from '@core/types';
import {
	createServiceFunc,
	createServiceFuncWithConverter,
} from '@core/utils/fetch/create-service-func.utils';
import { convertSlotToClient, convertSlotToServer } from '../constants/converters/slots.converter';
import type { AppointmentType, Slot, SlotFormType } from '../types';

export const addSlot = createServiceFunc('addSlot', (props: SlotFormType) => {
	const command = convertSlotToServer(props);
	return securedApi.slot.slotCreate(command);
});

export const updateSlot = createServiceFunc('updateSlot', (props: SlotFormType) =>
	securedApi.slot.slotUpdate(convertSlotToServer(props) as any),
);

export const deleteSlot = createServiceFunc('deleteSlot', (props: { id: string }) =>
	securedApi.slot.slotDelete({ slotId: props.id }),
);

export const deleteAppointment = createServiceFunc('deleteAppointment', (props: { id: string }) =>
	securedApi.appointment.appointmentDelete({ appointmentId: props.id }),
);

export const makeAppointment = createServiceFunc(
	'makeAppointment',
	(props: { userId: string; appointmentType: string; slotId: string }) =>
		securedApi.appointment.appointmentCreate({
			...props,
			appointmentType: props.appointmentType as AppointmentType,
		}),
);

export const getSlots = createServiceFuncWithConverter(
	'getSlots',
	(data: { pageSize: number; pageNumber: number; date?: string }) =>
		securedApi.slot.paginatedCreate({
			pageSize: data.pageSize,
			pageNumber: data.pageNumber,
			date: data.date,
		}),
	(data: any) => {
		const paginatedData = data as PaginatedData<SlotDto>;
		const convertedItems = (paginatedData.items || [])
			.map(convertSlotToClient)
			.filter((item): item is Slot => item !== null);
		return convertPaginatedData(
			{ ...paginatedData, items: convertedItems } as PaginatedData<Slot>,
			(item) => item,
		);
	},
);

export const getSlotById = createServiceFuncWithConverter(
	'getSlotById',
	(props: { id: string }) => securedApi.slot.slotList({ id: props.id }),
	(data: SlotDto) => {
		const converted = convertSlotToClient(data);
		if (!converted) {
			throw new Error('Slot not found');
		}
		return converted;
	},
);

export type SlotServicesKeys =
	| 'addSlot'
	| 'updateSlot'
	| 'deleteSlot'
	| 'getSlotById'
	| 'getSlots'
	| 'makeAppointment'
	| 'deleteAppointment';
