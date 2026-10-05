import { SimpleTableCell, SimpleTableHeaderCell } from '@core';
import type { NamedEntity } from '@core/types';
import type { ColumnDef } from '@tanstack/react-table';
import type { Personal } from '../types';

export const PersonalColumns: ColumnDef<Personal>[] = [
	{
		id: 'fio',
		accessorKey: 'fio',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="ФИО"
			/>
		),
		cell: (info) => <SimpleTableCell content={info.getValue() as string} />,
	},
	{
		id: 'speciality',
		accessorKey: 'speciality',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Специальность"
			/>
		),
		cell: (info) => <SimpleTableCell content={(info.getValue() as NamedEntity).name} />,
	},
	{
		id: 'phoneNumber',
		accessorKey: 'phoneNumber',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Телефон"
			/>
		),
		cell: (info) => <SimpleTableCell content={info.getValue() as string} />,
	},
	{
		id: 'gender',
		accessorKey: 'gender',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Пол"
			/>
		),
		cell: (info) => <SimpleTableCell content={!!info.getValue() ? 'Мужской' : 'Женский'} />,
	},
];
