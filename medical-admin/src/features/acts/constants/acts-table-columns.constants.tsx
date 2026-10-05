import { SimpleTableCell, SimpleTableHeaderCell } from '@core';
import type { ColumnDef } from '@tanstack/react-table';
import type { Act } from '../types/acts.types';

export const ActsColumns: ColumnDef<Act>[] = [
	{
		id: 'publicId',
		accessorKey: 'publicId',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="№"
			/>
		),
		cell: (info) => <SimpleTableCell content={String(info.getValue() ?? '')} />,
	},
	{
		id: 'advertiserName',
		accessorKey: 'advertiserName',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Компания"
			/>
		),
		cell: (info) => <SimpleTableCell content={String(info.getValue() ?? '')} />,
	},
	{
		id: 'checkNumber',
		accessorKey: 'checkNumber',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Номер счёта"
			/>
		),
		cell: (info) => <SimpleTableCell content={String(info.getValue() ?? '')} />,
	},

	{
		id: 'creationDate',
		accessorKey: 'creationDate',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Дата и время"
			/>
		),
		cell: (info) => {
			const value = info.getValue() as string | undefined;
			const date = value ? new Date(value) : null;
			const formatted = date ? date.toLocaleString('ru-RU') : '';

			return <SimpleTableCell content={formatted} />;
		},
	},
];
