import type { VirtualTableProps, VirtualTablePropsClassNames } from '@core/types';
import type { HeaderGroup } from '@tanstack/react-table';
import { memo } from 'react';
import { VirtualTableAdditionalHeaderRow } from './virtual-table-additional-header-row.component';

interface VirtualTableAdditionalHeaderProps<T> {
	headerGroups: HeaderGroup<any>[];
	additionalHeaderCellClassName: VirtualTablePropsClassNames['additionalHeaderCellClassName'];
	additionalHeaderRowClassName: VirtualTablePropsClassNames['additionalHeaderRowClassName'];
	setHeaderCellsBorders: VirtualTableProps<T>['setHeaderCellsBorders'];
	additionalHeaderData: VirtualTableProps<T>['additionalHeaderData'];
}

export const VirtualTableAdditionalHeader = memo(
	<T,>({
		headerGroups,
		additionalHeaderCellClassName,
		additionalHeaderData,
		additionalHeaderRowClassName,
		setHeaderCellsBorders,
	}: VirtualTableAdditionalHeaderProps<T>) => {
		if (!additionalHeaderData) {
			return null;
		}
		return (
			<thead className="w-fit">
				{headerGroups.map((headerGroup) => (
					<VirtualTableAdditionalHeaderRow
						key={`additional-header-row-${headerGroup.id}`}
						additionalHeaderData={additionalHeaderData}
						additionalHeaderCellClassName={additionalHeaderCellClassName}
						additionalHeaderRowClassName={additionalHeaderRowClassName}
						setHeaderCellsBorders={setHeaderCellsBorders}
						headers={headerGroup.headers}
					/>
				))}
			</thead>
		);
	},
);
