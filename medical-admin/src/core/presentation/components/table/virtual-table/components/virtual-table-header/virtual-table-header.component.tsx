import type { VirtualTableProps, VirtualTablePropsClassNames } from '@core/types';
import type { HeaderGroup } from '@tanstack/react-table';
import { memo } from 'react';
import { VirtualTableHeaderRow } from './virtual-table-header-row.component';

interface VirtualTableHeaderProps<T> {
	headerGroups: HeaderGroup<any>[];
	headerRowClassName: VirtualTablePropsClassNames['headerRowClassName'];
	setHeaderCellsBorders: VirtualTableProps<T>['setHeaderCellsBorders'];
	headerCellClassName: VirtualTablePropsClassNames['headerCellClassName'];
}

export const VirtualTableHeader = memo(
	<T,>({
		headerGroups,
		headerCellClassName,
		headerRowClassName,
		setHeaderCellsBorders,
	}: VirtualTableHeaderProps<T>) => {
		return (
			<thead className="w-fit">
				{headerGroups.map((headerGroup) => (
					<VirtualTableHeaderRow
						key={`header-row-${headerGroup.id}`}
						headerCellClassName={headerCellClassName}
						headerRowClassName={headerRowClassName}
						setHeaderCellsBorders={setHeaderCellsBorders}
						headers={headerGroup.headers}
					/>
				))}
			</thead>
		);
	},
);
