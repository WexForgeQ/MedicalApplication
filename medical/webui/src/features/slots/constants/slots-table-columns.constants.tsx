import { SimpleTableCell, SimpleTableHeaderCell } from '@core';
import { format } from '@core/utils';
import type { ColumnDef } from '@tanstack/react-table';
import type { Slot } from '../types';
import { SlotStatusNames } from './slots-names.constants';

export const SlotsColumns: ColumnDef<Slot>[] = [
	{
		id: 'doctor',
		accessorFn: (row) => row.doctor.fio,
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="ФИО врача"
			/>
		),
		cell: (info) => <SimpleTableCell content={info.getValue() as string} />,
	},
	{
		id: 'patient',
		accessorFn: (row) => row.patient?.fio || '—',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="ФИО пациента"
			/>
		),
		cell: (info) => <SimpleTableCell content={info.getValue() as string} />,
	},
	{
		id: 'date',
		accessorKey: 'date',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Дата"
			/>
		),
		cell: (info) => <SimpleTableCell content={format(info.getValue() as Date, 'dd.MM.yyyy')} />,
	},
	{
		id: 'time',
		accessorKey: 'time',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Время"
			/>
		),
		cell: (info) => <SimpleTableCell content={info.getValue() as string} />,
	},
	{
		id: 'status',
		accessorKey: 'status',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Статус"
			/>
		),
		cell: (info) => (
			<SimpleTableCell content={SlotStatusNames[info.getValue() as Slot['status']]} />
		),
	},
];
