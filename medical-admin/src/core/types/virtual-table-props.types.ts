import type { InfiniteScrollOptions } from '@core/utils';
import type { ColumnDef } from '@tanstack/react-table';
import type { RefObject } from 'react';
import type { NestedKeyOf } from './nested-key-of.types';

interface VirtualTablePropsClassNames {
	headerRowClassName?: string;
	additionalHeaderRowClassName?: string;
	headerCellClassName?: string;
	additionalHeaderCellClassName?: string;
	contentCellClassName?: string;
	contentRowClassName?: string;
	tableClassName?: string;
	tableWrapperClassName?: string;
	componentWrapperClassName?: string;
	rowColorAlternation?: {
		even: string;
		default: string;
	};
	additionalFooterCellClassName?: string;
	additionalFooterRowClassName?: string;
}

interface VirtualTableAdditionalColumnsData {
	value: string | number;
	classNames?: {
		wrapperClassName?: string;
		textClassName?: string;
	};
}

type VirtualTableAdditionalColumns<T> = Partial<
	Record<NestedKeyOf<T>, VirtualTableAdditionalColumnsData>
>;

interface VirtualTablePinningConfig<T> {
	left?: NestedKeyOf<T>[];
	right?: NestedKeyOf<T>[];
}

interface VirtualTableProps<T> {
	additionalRowsForRender?: number;
	classNames?: VirtualTablePropsClassNames;
	columns: ColumnDef<T>[];
	activeItem?: T;
	setHeaderCellsBorders?: boolean;
	setContentCellsBorders?: boolean;
	setFooterCellsBorders?: boolean;
	setRowColorAlternation?: boolean;
	data: T[];
	footerData?: T[];
	contentRowHeight: number;
	infiniteScrollOptions?: InfiniteScrollOptions;
	onRowClick?: (item: T) => void;
	onRowDoubleClick?: (item: T) => void;
	getRowId?: (row: T, index: number) => string | number;
	columnsVisibilityConfig?: Partial<Record<NestedKeyOf<T>, boolean>>;
	additionalHeaderData?: VirtualTableAdditionalColumns<T>;
	additionalFooterData?: VirtualTableAdditionalColumns<T>;
	externalParentRef?: RefObject<HTMLDivElement | null>;
	columnsPiningConfig?: VirtualTablePinningConfig<T>;
}

interface VirtualTableData<T> {
	rows: T[];
}

export type {
	VirtualTableAdditionalColumnsData,
	VirtualTableData,
	VirtualTableProps,
	VirtualTablePropsClassNames,
};
