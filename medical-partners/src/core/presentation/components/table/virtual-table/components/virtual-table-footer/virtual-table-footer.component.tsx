import type { VirtualTableProps, VirtualTablePropsClassNames } from '@core/types';
import type { InfiniteScrollOptions } from '@core/utils';
import { LoadingProccessBar } from '@core/presentation/components/loaders';
import type { HeaderGroup } from '@tanstack/react-table';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { VirtualTableFooterRow } from './virtual-table-footer-row.component';

interface VirtualTableFooterProps<T> {
	footerGroups: HeaderGroup<any>[];
	additionalFooterCellClassName: VirtualTablePropsClassNames['additionalFooterCellClassName'];
	additionalFooterRowClassName: VirtualTablePropsClassNames['additionalFooterRowClassName'];
	setFooterCellsBorders: VirtualTableProps<T>['setFooterCellsBorders'];
	additionalFooterData: VirtualTableProps<T>['additionalFooterData'];
	infiniteScrollOptionsLoading?: InfiniteScrollOptions['isLoading'];
}

export const VirtualTableFooter = memo(
	<T,>({
		footerGroups,
		infiniteScrollOptionsLoading,
		additionalFooterCellClassName,
		additionalFooterData,
		additionalFooterRowClassName,
		setFooterCellsBorders,
	}: VirtualTableFooterProps<T>) => {
		return (
			<tfoot className="w-fit">
				{!!infiniteScrollOptionsLoading ? (
					<tr
						className={twMerge(
							`h-[25px] bg-white after:absolute after:left-0 after:top-0 after:h-[1px] after:w-full after:bg-[#e5e7eb] after:content-['']`,
							additionalFooterRowClassName,
						)}
					>
						<td
							colSpan={footerGroups[0]?.headers.length || 1}
							className={twMerge(
								setFooterCellsBorders &&
									`relative after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-[#e5e7eb] after:content-['']`,
								additionalFooterCellClassName,
							)}
						>
							<div className="flex items-center justify-center py-2">
								<LoadingProccessBar bgClassName="w-[200px]" />
							</div>
						</td>
					</tr>
				) : (
					additionalFooterData &&
					footerGroups.map((footerGroup) => (
						<VirtualTableFooterRow
							key={`footer-row-${footerGroup.id}`}
							footers={footerGroup.headers}
							setFooterCellsBorders={setFooterCellsBorders}
							additionalFooterCellClassName={additionalFooterCellClassName}
							additionalFooterData={additionalFooterData}
							additionalFooterRowClassName={additionalFooterRowClassName}
						/>
					))
				)}
			</tfoot>
		);
	},
);
