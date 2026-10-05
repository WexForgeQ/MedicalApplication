import { SimpleTableCell, SimpleTableHeaderCell } from '@core';
import type { ColumnDef } from '@tanstack/react-table';
import type { Material } from '../types';

export const materialsPlaceholders: Material[] = Array.from({ length: 20 }, (_, i) => ({
	id: `${i + 1}`,
	name: `Name ${i + 1}`,
	description: `Description ${i + 1}`,
	category: `Category ${i + 1}`,
	price: i,
}));

export const MaterialsColumns: ColumnDef<Material>[] = [
	{
		id: 'name',
		accessorKey: 'name',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Название"
			/>
		),
		cell: (info) => <SimpleTableCell content={info.getValue() as string} />,
	},
	{
		id: 'description',
		accessorKey: 'description',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Описание"
			/>
		),
		cell: (info) => <SimpleTableCell content={info.getValue() as string} />,
	},
	{
		id: 'category',
		accessorKey: 'category',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Категория"
			/>
		),
		cell: (info) => <SimpleTableCell content={info.getValue() as string} />,
	},
	{
		id: 'price',
		accessorKey: 'price',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Цена"
			/>
		),
		cell: (info) => {
			const value = info.getValue() as number;
			return <SimpleTableCell content={`${value} ₽`} />;
		},
	},
];
