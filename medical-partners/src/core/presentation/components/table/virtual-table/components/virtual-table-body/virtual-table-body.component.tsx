import type { VirtualTableProps, VirtualTablePropsClassNames } from '@core/types';
import type { RowModel } from '@tanstack/react-table';
import type { VirtualItem } from '@tanstack/react-virtual';
import { memo, useRef } from 'react';
import { VirtualTableBodyRow } from './virtual-table-body-row.component';

interface VirtualTableBodyProps<T> {
	rowModel: RowModel<any>;
	virtualItems: VirtualItem[];
	totalHeight: number;
	activeItem?: T;
	setRowColorAlternation: VirtualTableProps<T>['setRowColorAlternation'];
	setContentCellsBorders: VirtualTableProps<T>['setContentCellsBorders'];
	rowColorAlternation: VirtualTablePropsClassNames['rowColorAlternation'];
	contentRowClassName: VirtualTablePropsClassNames['contentRowClassName'];
	contentCellClassName: VirtualTablePropsClassNames['contentCellClassName'];
	externalParentRef: VirtualTableProps<T>['externalParentRef'];
	isColumnPininigConfig: boolean;
	onRowClick?: (() => void) | ((item: T) => void);
	onRowDoubleClick?: (item: T) => void;
	getRowId?: (row: T, index: number) => string | number;
}

export const VirtualTableBody = memo(
	<T,>({
		rowModel,
		totalHeight,
		virtualItems,
		setContentCellsBorders,
		setRowColorAlternation,
		rowColorAlternation,
		externalParentRef,
		contentCellClassName,
		contentRowClassName,
		isColumnPininigConfig,
		activeItem,
		onRowClick,
		onRowDoubleClick,
		getRowId,
	}: VirtualTableBodyProps<T>) => {
		const bodyRef = useRef<HTMLTableSectionElement>(null!);
		const paddingTop = virtualItems.length > 0 ? virtualItems[0].start : 0;
		const lastItem = virtualItems[virtualItems.length - 1];
		const paddingBottom = lastItem ? totalHeight - (lastItem.start + lastItem.size) : 0;

		return (
			<tbody ref={bodyRef}>
				{paddingTop > 0 && <tr style={{ height: paddingTop }}></tr>}
				{virtualItems.map((virtualItem, index) => {
					const row = rowModel.rows[virtualItem.index];
					if (!row) return null;
					return (
						<VirtualTableBodyRow
							key={
								getRowId
									? getRowId(row.original as T, virtualItem.index)
									: `body-row-${row.id}`
							}
							row={row}
							tableBodyRef={bodyRef}
							rowIndex={index}
							isColumnPininigConfig={isColumnPininigConfig}
							rowsCount={rowModel.rows.length}
							virtualRowIndex={virtualItem.index}
							setRowColorAlternation={setRowColorAlternation}
							rowColorAlternation={rowColorAlternation}
							externalParentRef={externalParentRef}
							setContentCellsBorders={setContentCellsBorders}
							contentRowClassName={contentRowClassName}
							contentCellClassName={contentCellClassName}
							activeItem={activeItem}
							onRowClick={onRowClick}
							onRowDoubleClick={onRowDoubleClick}
						/>
					);
				})}
				{paddingBottom > 0 && <tr style={{ height: paddingBottom }}></tr>}
			</tbody>
		);
	},
);
