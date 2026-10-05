import type { CheckStatus, CheckType } from '@api-gen/api';
import { SimpleTableCell, SimpleTableHeaderCell } from '@core';
import type { ColumnDef } from '@tanstack/react-table';
import type { Check } from '../types/checks.types';

export const CHECK_TYPE_TRANSLATIONS: Record<CheckType, string> = {
	Mobile: 'Мобильное приложение',
	WebSite: 'Корпоративный Веб-сайт',
	Admin: 'Админ-панель для записи',
};

export const CHECK_STATUS_TRANSLATIONS: Record<CheckStatus, string> = {
	AwaitingPayment: 'Ожидает оплаты',
	Paid: 'Оплачен',
	Canceled: 'Отменён',
};

export const mapCheckType = (type?: CheckType) => {
	if (!type) return '';
	return CHECK_TYPE_TRANSLATIONS[type] ?? type;
};

export const mapCheckStatus = (status?: CheckStatus) => {
	if (!status) return '';
	return CHECK_STATUS_TRANSLATIONS[status] ?? status;
};

export const ChecksColumns: ColumnDef<Check>[] = [
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
		id: 'checkType',
		accessorKey: 'checkType',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Тип"
			/>
		),
		cell: (info) => <SimpleTableCell content={mapCheckType(info.getValue() as CheckType)} />,
	},
	{
		id: 'advertiserName',
		accessorKey: 'advertiserName',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Навзание клиники"
			/>
		),
		cell: (info) => <SimpleTableCell content={String(info.getValue() ?? '')} />,
	},
	{
		id: 'price',
		accessorKey: 'price',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Стоимость"
			/>
		),
		cell: (info) => {
			const value = info.getValue() as number | undefined;
			const formatted = value != null ? `${value}` : '';
			return <SimpleTableCell content={formatted} />;
		},
	},
	{
		id: 'createdAt',
		accessorKey: 'createdAt',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Дата"
			/>
		),
		cell: (info) => {
			const value = info.getValue() as string | undefined;
			const date = value ? new Date(value) : null;
			const formatted = date ? date.toLocaleString('ru-RU') : '';

			return <SimpleTableCell content={formatted} />;
		},
	},
	{
		id: 'durationMonth',
		accessorKey: 'durationMonth',
		header: () => (
			<SimpleTableHeaderCell
				textClassName="text-[12px] w-full text-center text-primary"
				text="Длительность услуги(месяц)"
			/>
		),
		cell: (info) => <SimpleTableCell content={String(info.getValue())} />,
	},
];
