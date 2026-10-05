import type { VirtualTableProps } from '@core/types';
import { useInfiniteScroll, useVirtualTable } from '@core/utils';
import { useVirtualizer } from '@tanstack/react-virtual';
import type { JSX } from 'react';
import { forwardRef, memo, useImperativeHandle, useLayoutEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import {
	VirtualTableAdditionalHeader,
	VirtualTableBody,
	VirtualTableFooter,
	VirtualTableHeader,
} from './components';

const VirtualTableComponentInner = <T,>(
	props: VirtualTableProps<T>,
	ref: React.Ref<HTMLTableElement>,
): JSX.Element => {
	const {
		columns,
		data,
		classNames,
		setContentCellsBorders = false,
		setHeaderCellsBorders = false,
		setRowColorAlternation = false,
		setFooterCellsBorders = false,
		infiniteScrollOptions,
		contentRowHeight = 50,
		additionalRowsForRender = 20,
		columnsVisibilityConfig,
		additionalHeaderData,
		externalParentRef,
		additionalFooterData,
		columnsPiningConfig,
		activeItem,
		onRowClick,
		onRowDoubleClick,
		getRowId,
	} = props;

	const tableRef = useRef<HTMLTableElement>(null);
	const parentRef = useRef<HTMLDivElement | null>(null);

	useImperativeHandle(ref, () => tableRef.current!);

	useInfiniteScroll<HTMLDivElement>(data.length, externalParentRef ?? parentRef, {
		scrollOptions: infiniteScrollOptions,
	});

	const { getHeaderGroups, getRowModel, changeColumnsVisibility } = useVirtualTable<T>(
		columns,
		data,
		{ columnsVisibilityConfig, columnsPiningConfig },
	);

	const rowVirtualizer = useVirtualizer({
		count: data.length,
		estimateSize: () => contentRowHeight,
		getScrollElement: () => externalParentRef?.current ?? parentRef.current,
		overscan: additionalRowsForRender,
	});

	useLayoutEffect(() => {
		if (columnsVisibilityConfig) {
			changeColumnsVisibility(columnsVisibilityConfig);
			rowVirtualizer.measure();
		}
	}, [columnsVisibilityConfig]);

	const rowModel = getRowModel();
	const headerGroups = getHeaderGroups();

	const virtualItems = rowVirtualizer.getVirtualItems();
	const totalHeight = rowVirtualizer.getTotalSize();

	return (
		<div
			className={twMerge(
				'h-full max-h-[80vh] w-full rounded-xl',
				classNames?.componentWrapperClassName,
			)}
			ref={parentRef}
		>
			<div className={twMerge('relative', classNames?.tableWrapperClassName)}>
				<table
					className={twMerge(
						'w-full table-auto bg-bgGray px-[10px] [border-collapse:separate] [border-spacing:0_10px]',
						classNames?.tableClassName,
					)}
					ref={tableRef}
				>
					<VirtualTableAdditionalHeader
						headerGroups={headerGroups}
						additionalHeaderCellClassName={classNames?.additionalHeaderCellClassName}
						additionalHeaderData={additionalHeaderData}
						additionalHeaderRowClassName={classNames?.additionalHeaderRowClassName}
						setHeaderCellsBorders={setHeaderCellsBorders}
					/>
					<VirtualTableHeader
						headerGroups={headerGroups}
						headerCellClassName={classNames?.headerCellClassName}
						setHeaderCellsBorders={setHeaderCellsBorders}
						headerRowClassName={classNames?.headerRowClassName}
					/>
					<VirtualTableBody
						rowModel={rowModel}
						isColumnPininigConfig={!!columnsPiningConfig}
						virtualItems={virtualItems}
						activeItem={activeItem}
						totalHeight={totalHeight}
						setContentCellsBorders={setContentCellsBorders}
						setRowColorAlternation={setRowColorAlternation}
						rowColorAlternation={classNames?.rowColorAlternation}
						contentCellClassName={classNames?.contentCellClassName}
						contentRowClassName={classNames?.contentRowClassName}
						externalParentRef={externalParentRef}
						onRowClick={onRowClick as any}
						getRowId={getRowId as any}
						onRowDoubleClick={onRowDoubleClick as any}
					/>
					<VirtualTableFooter
						footerGroups={headerGroups}
						infiniteScrollOptionsLoading={!!infiniteScrollOptions?.isLoading}
						additionalFooterData={additionalFooterData}
						setFooterCellsBorders={setFooterCellsBorders}
						additionalFooterCellClassName={classNames?.additionalFooterCellClassName}
						additionalFooterRowClassName={classNames?.additionalFooterRowClassName}
					/>
				</table>
			</div>
		</div>
	);
};

export function createVirtualTable<T>() {
	const Component = forwardRef<HTMLTableElement, VirtualTableProps<T>>(
		VirtualTableComponentInner,
	);
	Component.displayName = 'VirtualTable';
	return memo(Component);
}
