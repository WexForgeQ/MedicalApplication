import { ShortenedTextCell, SimpleTableCell, SimpleTableHeaderCell } from '@core';
import type { ColumnDef } from '@tanstack/react-table';
import type { Patient, PatientFormType } from '../types';

export const patientsPlaceholders: PatientFormType[] = Array.from({ length: 20 }, (_, i) => ({
	id: `${i + 1}`,
	fio: `ФИО ${i + 1}`,
	email: `email${i + 1}@gmail.com`,
	phoneNumber: `+375(29)000-00-${String(i + 1).padStart(2, '0')}`,
	dateOfBirth: `01.01.199${i}`,
	livingAdress: `Минск, ул. Гоголя ${i + 1}`,
	chronicDiseaseData: i % 2 === 0 ? 'Гипертония' : undefined,
}));

export const PatientsColumns: ColumnDef<Patient>[] = [
	{
		id: 'publicId',
		accessorKey: 'publicId',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="№"
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
		id: 'companyName',
		accessorKey: 'companyName',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Название"
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
		id: 'directorFio',
		accessorKey: 'directorFio',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="ФИО Директора"
			/>
		),
		cell: (info) => <SimpleTableCell content={info.getValue() as string} />,
	},
	{
		id: 'companyAddress',
		accessorKey: 'companyAddress',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Адрес компании"
			/>
		),
		cell: (info) => <SimpleTableCell content={info.getValue() as string} />,
	},
	{
		id: 'unp',
		accessorKey: 'unp',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="УНП"
			/>
		),
		cell: (info) => <SimpleTableCell content={info.getValue() as string} />,
	},
	{
		id: 'currentAccount',
		accessorKey: 'currentAccount',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Расчетный счет"
			/>
		),
		cell: (info) => <SimpleTableCell content={info.getValue() as string} />,
	},
	{
		id: 'bik',
		accessorKey: 'bik',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="БИК"
			/>
		),
		cell: (info) => <SimpleTableCell content={info.getValue() as string} />,
	},
	{
		id: 'bankAddress',
		accessorKey: 'bankAddress',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Адрес банка"
			/>
		),
		cell: (info) => <SimpleTableCell content={info.getValue() as string} />,
	},
	{
		id: 'companyDescription',
		accessorKey: 'companyDescription',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Информация"
			/>
		),
		cell: (info) => (
			<ShortenedTextCell
				classNames={{ containerClassName: 'max-w-[100px]' }}
				text={info.getValue() as string}
				showPopoverInfo
			/>
		),
	},
];
