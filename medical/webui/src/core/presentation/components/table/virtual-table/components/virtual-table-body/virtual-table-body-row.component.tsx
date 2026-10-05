import type { VirtualTableProps, VirtualTablePropsClassNames } from '@core/types';
import { getPinnedStyle } from '@core/utils';
import {
	flexRender,
	type CellContext,
	type ColumnDefTemplate,
	type Row,
} from '@tanstack/react-table';
import { memo, type CSSProperties, type RefObject } from 'react';
import { twMerge } from 'tailwind-merge';

interface VirtualTableBodyRowProps<T> {
	row: Row<any>;
	virtualRowIndex: number;
	activeItem?: T;
	setRowColorAlternation: VirtualTableProps<T>['setRowColorAlternation'];
	setContentCellsBorders: VirtualTableProps<T>['setContentCellsBorders'];
	rowColorAlternation: VirtualTablePropsClassNames['rowColorAlternation'];
	contentRowClassName: VirtualTablePropsClassNames['contentRowClassName'];
	contentCellClassName: VirtualTablePropsClassNames['contentCellClassName'];
	externalParentRef?: VirtualTableProps<T>['externalParentRef'];
	tableBodyRef: RefObject<HTMLTableSectionElement>;
	rowIndex: number;
	rowsCount: number;
	isColumnPininigConfig: boolean;
	onRowClick?: (() => void) | ((item: T) => void);
	onRowDoubleClick?: (item: T) => void;
}

interface VirtualTableBodyCellProps<T> {
	contentCellClassName: VirtualTablePropsClassNames['contentCellClassName'];
	cell?: ColumnDefTemplate<CellContext<any, unknown>>;
	context: CellContext<any, unknown>;
	setContentCellsBorders: VirtualTableProps<T>['setContentCellsBorders'];
	pinnedStyle?: CSSProperties;
	index: number;
	cellsCount: number;
	bgClassName: string;
	isLastRow: boolean;
}

const VirtualTableBodyCell = memo(
	<T,>({
		cell,
		contentCellClassName,
		context,
		pinnedStyle,
		index,
		cellsCount,
		setContentCellsBorders,
		bgClassName,
		isLastRow,
	}: VirtualTableBodyCellProps<T>) => {
		return (
			<td
				style={pinnedStyle}
				className={twMerge(
					!!pinnedStyle && bgClassName,
					!!setContentCellsBorders
						? index !== cellsCount - 1
							? !!pinnedStyle
								? isLastRow
									? `relative pr-[1px] after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-[#e5e7eb] after:content-['']`
									: `pb-[1px] pr-[1px] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-[#e5e7eb] before:content-[''] after:absolute after:bottom-0 after:right-0 after:h-full after:w-[1px] after:bg-[#e5e7eb] after:content-['']`
								: `relative pr-[1px] after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-[#e5e7eb] after:content-['']`
							: ''
						: '',
					contentCellClassName,
				)}
			>
				{flexRender(cell, context)}
			</td>
		);
	},
);

export const VirtualTableBodyRow = <T,>({
	row,
	virtualRowIndex,
	setRowColorAlternation,
	rowColorAlternation,
	externalParentRef,
	setContentCellsBorders,
	contentRowClassName,
	contentCellClassName,
	rowIndex,
	rowsCount,
	isColumnPininigConfig,
	activeItem,
	tableBodyRef,
	onRowClick,
	onRowDoubleClick,
}: VirtualTableBodyRowProps<T>) => {
	const visibleCells = row.getVisibleCells();
	const isEven = virtualRowIndex % 2 === 0;
	const bgClassName = setRowColorAlternation
		? isEven
			? !!rowColorAlternation
				? rowColorAlternation.even
				: 'bg-[#F3F7FB]'
			: !!rowColorAlternation
				? rowColorAlternation.default
				: 'bg-white'
		: 'bg-white';

	const handleRowMouseEnter = (rowId: string) =>
		(externalParentRef ? externalParentRef.current : tableBodyRef.current)
			?.querySelectorAll(`tr[data-attr-row-index="${rowId}"]`)
			?.forEach((row) =>
				(isColumnPininigConfig ? row.querySelectorAll('td') : [row]).forEach((el) => {
					el.classList.remove(bgClassName);
					el.classList.add('bg-neutral');
				}),
			);

	const handleRowMouseLeave = (rowId: string) =>
		(externalParentRef ? externalParentRef.current : tableBodyRef.current)
			?.querySelectorAll(`tr[data-attr-row-index="${rowId}"]`)
			?.forEach((row) =>
				(isColumnPininigConfig ? row.querySelectorAll('td') : [row]).forEach((el) => {
					el.classList.add(bgClassName);
					el.classList.remove('bg-neutral');
				}),
			);

	return (
		<tr
			data-attr-row-index={row.id}
			onClick={() => onRowClick?.(row.original)}
			onDoubleClick={() => onRowDoubleClick?.(row.original)}
			className={twMerge(
				!!setContentCellsBorders
					? rowIndex !== rowsCount - 1
						? `relative pb-[1px] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-[#e5e7eb] after:content-['']`
						: ''
					: '',
				bgClassName,
				contentRowClassName,
				'cursor-pointer transition-shadow',
				'rounded-[10px] hover:bg-white hover:shadow-[0_0_4px_0_rgba(17,72,120,0.46)]',
				JSON.stringify(activeItem) == JSON.stringify(row.original) &&
					'rounded-[10px] bg-white shadow-[0_0_4px_0_rgba(17,72,120,0.46)]',
			)}
			onMouseEnter={() => {
				handleRowMouseEnter(row.id);
			}}
			onMouseLeave={() => {
				handleRowMouseLeave(row.id);
			}}
		>
			{visibleCells.map((cell, index) => {
				const cellPinnedStyle = getPinnedStyle(cell.column, 9);
				const isFirst = index === 0;
				const isLast = index === visibleCells.length - 1;

				return (
					<VirtualTableBodyCell
						key={`body-cell-${cell.id}`}
						cell={cell.column.columnDef.cell}
						contentCellClassName={twMerge(
							contentCellClassName,
							isFirst && 'rounded-l-[10px]',
							isLast && 'rounded-r-[10px]',
						)}
						context={cell.getContext()}
						cellsCount={visibleCells.length}
						index={index}
						pinnedStyle={cellPinnedStyle}
						setContentCellsBorders={setContentCellsBorders}
						bgClassName={bgClassName}
						isLastRow={rowIndex === rowsCount - 1}
					/>
				);
			})}
		</tr>
	);
};
