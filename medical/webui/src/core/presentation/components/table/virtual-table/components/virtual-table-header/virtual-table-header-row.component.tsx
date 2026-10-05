import type { VirtualTableProps, VirtualTablePropsClassNames } from '@core/types';
import { getPinnedStyle } from '@core/utils';
import {
	flexRender,
	type ColumnDefTemplate,
	type Header,
	type HeaderContext,
} from '@tanstack/react-table';
import { memo, type CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

interface VirtualTableHeaderRowProps<T> {
	headerRowClassName: VirtualTablePropsClassNames['headerRowClassName'];
	setHeaderCellsBorders: VirtualTableProps<T>['setHeaderCellsBorders'];
	headerCellClassName: VirtualTablePropsClassNames['headerCellClassName'];
	headers: Header<any, unknown>[];
}

interface VirtualTableHeaderCellProps<T> {
	index: number;
	cellsCount: number;
	setHeaderCellsBorders: VirtualTableProps<T>['setHeaderCellsBorders'];
	headerCellClassName: VirtualTablePropsClassNames['headerCellClassName'];
	header?: ColumnDefTemplate<HeaderContext<any, unknown>>;
	context: HeaderContext<any, unknown>;
	colSpan: number;
	pinnedStyle?: CSSProperties;
}

export const VirtualTableHeaderCell = memo(
	<T,>({
		index,
		cellsCount,
		setHeaderCellsBorders,
		headerCellClassName,
		header,
		context,
		colSpan,
		pinnedStyle,
	}: VirtualTableHeaderCellProps<T>) => {
		return (
			<th
				style={pinnedStyle}
				className={twMerge(
					'bg-transparent text-[12px] font-medium text-primary',
					!!setHeaderCellsBorders
						? index !== cellsCount - 1
							? !!pinnedStyle
								? `pb-[1px] pr-[1px] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-[#e5e7eb] before:content-[''] after:absolute after:bottom-0 after:right-0 after:h-full after:w-[1px] after:bg-[#e5e7eb] after:content-['']`
								: `relative pr-[1px] after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-[#e5e7eb] after:content-['']`
							: ''
						: '',
					headerCellClassName,
				)}
				colSpan={colSpan}
			>
				{flexRender(header, context)}
			</th>
		);
	},
);

export const VirtualTableHeaderRow = memo(
	<T,>({
		headerRowClassName,
		setHeaderCellsBorders,
		headerCellClassName,
		headers,
	}: VirtualTableHeaderRowProps<T>) => {
		return (
			<tr className={twMerge(`sticky top-0 z-10 h-[25px] bg-bgGray`, headerRowClassName)}>
				{headers.map((header, index) => {
					if (!header.column.getIsVisible()) {
						return null;
					}
					return (
						<VirtualTableHeaderCell
							key={`header-cell-${header.id}`}
							index={index}
							cellsCount={headers.length}
							headerCellClassName={headerCellClassName}
							setHeaderCellsBorders={setHeaderCellsBorders}
							colSpan={header.colSpan}
							context={header.getContext()}
							header={header.column.columnDef.header}
							pinnedStyle={getPinnedStyle(header.column, 20)}
						/>
					);
				})}
			</tr>
		);
	},
);
