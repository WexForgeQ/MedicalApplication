import type {
	VirtualTableAdditionalColumnsData,
	VirtualTableProps,
	VirtualTablePropsClassNames,
} from '@core/types';
import { getPinnedStyle } from '@core/utils';
import type { Header } from '@tanstack/react-table';
import { memo, type CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

interface VirtualTableAdditionalHeaderRowProps<T> {
	additionalHeaderData: VirtualTableProps<T>['additionalHeaderData'];
	headers: Header<any, unknown>[];
	additionalHeaderCellClassName: VirtualTablePropsClassNames['additionalHeaderCellClassName'];
	additionalHeaderRowClassName: VirtualTablePropsClassNames['additionalHeaderRowClassName'];
	setHeaderCellsBorders: VirtualTableProps<T>['setHeaderCellsBorders'];
}

interface VirtualTableAdditionalHeaderCellProps<T> {
	additionalHeaderCellClassName: VirtualTablePropsClassNames['additionalHeaderCellClassName'];
	data?: VirtualTableAdditionalColumnsData;
	setHeaderCellsBorders: VirtualTableProps<T>['setHeaderCellsBorders'];
	colSpan: number;
	index: number;
	cellsCount: number;
	pinnedStyle?: CSSProperties;
}

export const VirtualTableAdditionalHeaderCell = memo(
	<T,>({
		additionalHeaderCellClassName,
		data,
		setHeaderCellsBorders,
		colSpan,
		index,
		pinnedStyle,
		cellsCount,
	}: VirtualTableAdditionalHeaderCellProps<T>) => {
		return (
			<th
				style={pinnedStyle}
				colSpan={colSpan}
				className={twMerge(
					!!setHeaderCellsBorders
						? index !== cellsCount - 1
							? !!pinnedStyle
								? `pb-[1px] pr-[1px] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-[#e5e7eb] before:content-[''] after:absolute after:bottom-0 after:right-0 after:h-full after:w-[1px] after:bg-[#e5e7eb] after:content-['']`
								: `relative pr-[1px] after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-[#e5e7eb] after:content-['']`
							: ''
						: '',
					additionalHeaderCellClassName,
				)}
			>
				<div
					className={twMerge(
						'flex items-center justify-center',
						data?.classNames?.wrapperClassName,
					)}
				>
					<p
						title={data?.value !== undefined ? data.value.toString() : ''}
						className={twMerge(
							'truncate text-xs font-normal',
							data?.classNames?.textClassName,
						)}
					>
						{data?.value !== undefined ? data?.value : ''}
					</p>
				</div>
			</th>
		);
	},
);

export const VirtualTableAdditionalHeaderRow = memo(
	<T,>({
		additionalHeaderCellClassName,
		additionalHeaderData,
		additionalHeaderRowClassName,
		setHeaderCellsBorders,
		headers,
	}: VirtualTableAdditionalHeaderRowProps<T>) => {
		return (
			<tr
				className={twMerge(
					'sticky top-0 z-10 h-[24px] border-b-[1px] bg-white',
					additionalHeaderRowClassName,
				)}
			>
				{headers.map((header, index) => {
					if (!header.column.getIsVisible()) {
						return null;
					}
					return (
						<VirtualTableAdditionalHeaderCell
							key={`additional-header-cell-${header.id}`}
							data={additionalHeaderData![header.column.columnDef.id as keyof T]}
							setHeaderCellsBorders={setHeaderCellsBorders}
							additionalHeaderCellClassName={additionalHeaderCellClassName}
							cellsCount={headers.length}
							colSpan={header.colSpan}
							index={index}
							pinnedStyle={getPinnedStyle(header.column, 20)}
						/>
					);
				})}
			</tr>
		);
	},
);
