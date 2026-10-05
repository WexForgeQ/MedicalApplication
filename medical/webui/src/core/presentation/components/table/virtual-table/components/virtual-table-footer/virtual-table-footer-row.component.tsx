import type {
	VirtualTableAdditionalColumnsData,
	VirtualTableProps,
	VirtualTablePropsClassNames,
} from '@core/types';
import { getPinnedStyle } from '@core/utils';
import type { Header } from '@tanstack/react-table';
import { memo, type CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

interface VirtualTableFooterRowProps<T> {
	footers: Header<any, unknown>[];
	additionalFooterCellClassName: VirtualTablePropsClassNames['additionalFooterCellClassName'];
	additionalFooterRowClassName: VirtualTablePropsClassNames['additionalFooterRowClassName'];
	setFooterCellsBorders: VirtualTableProps<T>['setFooterCellsBorders'];
	additionalFooterData: VirtualTableProps<T>['additionalFooterData'];
}

interface VirtualTableFooterCellProps<T> {
	data?: VirtualTableAdditionalColumnsData;
	colSpan: number;
	index: number;
	cellsCount: number;
	setFooterCellsBorders: VirtualTableProps<T>['setFooterCellsBorders'];
	additionalFooterCellClassName: VirtualTablePropsClassNames['additionalFooterCellClassName'];
	pinnedStyle?: CSSProperties;
}

const VirtualTableFooterCell = memo(
	<T,>({
		colSpan,
		data,
		index,
		setFooterCellsBorders,
		additionalFooterCellClassName,
		cellsCount,
		pinnedStyle,
	}: VirtualTableFooterCellProps<T>) => {
		return (
			<td
				colSpan={colSpan}
				style={pinnedStyle}
				className={twMerge(
					!!setFooterCellsBorders
						? index !== cellsCount - 1
							? !!pinnedStyle
								? `pr-[1px] pt-[1px] before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-[#e5e7eb] before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-[#e5e7eb] after:content-['']`
								: `relative pr-[1px] after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-[#e5e7eb] after:content-['']`
							: ''
						: '',
					additionalFooterCellClassName,
				)}
			>
				<div
					className={twMerge(
						'flex items-center justify-center',
						data?.classNames?.wrapperClassName,
					)}
				>
					<p
						title={data?.value ? data.value.toString() : ''}
						className={twMerge('text-xs font-normal', data?.classNames?.textClassName)}
					>
						{data?.value || ''}
					</p>
				</div>
			</td>
		);
	},
);

export const VirtualTableFooterRow = memo(
	<T,>({
		footers,
		additionalFooterCellClassName,
		additionalFooterData,
		additionalFooterRowClassName,
		setFooterCellsBorders,
	}: VirtualTableFooterRowProps<T>) => {
		return (
			<tr
				className={twMerge(
					`sticky bottom-0 z-10 h-[25px] bg-white pt-[1px] after:absolute after:left-0 after:top-0 after:h-[1px] after:w-full after:bg-[#e5e7eb] after:content-['']`,
					additionalFooterRowClassName,
				)}
			>
				{footers.map((footer, index) => {
					if (!footer.column.getIsVisible()) {
						return null;
					}
					return (
						<VirtualTableFooterCell
							key={`footer-cell-${footer.id}`}
							index={index}
							data={additionalFooterData![footer.column.columnDef.id as keyof T]}
							additionalFooterCellClassName={additionalFooterCellClassName}
							setFooterCellsBorders={setFooterCellsBorders}
							colSpan={footer.colSpan}
							cellsCount={footers.length}
							pinnedStyle={getPinnedStyle(footer.column, 20)}
						/>
					);
				})}
			</tr>
		);
	},
);
