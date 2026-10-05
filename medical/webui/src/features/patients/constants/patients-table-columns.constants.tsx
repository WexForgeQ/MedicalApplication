import { SimpleTableCell, SimpleTableHeaderCell } from '@core';
import type { ColumnDef } from '@tanstack/react-table';
import type { PatientFormType } from '../types';

export const patientsPlaceholders: PatientFormType[] = Array.from({ length: 20 }, (_, i) => ({
	id: `${i + 1}`,
	fio: `ФИО ${i + 1}`,
	email: `email${i + 1}@gmail.com`,
	phoneNumber: `+375(29)000-00-${String(i + 1).padStart(2, '0')}`,
	dateOfBirth: `01.01.199${i}`,
	livingAdress: `Минск, ул. Гоголя ${i + 1}`,
	chronicDiseaseData: i % 2 === 0 ? 'Гипертония' : undefined,
}));

export const PatientsColumns: ColumnDef<PatientFormType>[] = [
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
		id: 'email',
		accessorKey: 'email',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Email"
			/>
		),
		cell: (info) => <SimpleTableCell content={info.getValue() as string} />,
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
		id: 'dateOfBirth',
		accessorKey: 'dateOfBirth',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Дата рождения"
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
