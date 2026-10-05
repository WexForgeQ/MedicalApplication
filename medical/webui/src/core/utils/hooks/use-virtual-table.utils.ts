import type { VirtualTableProps } from '@core/types';
import { getCoreRowModel, useReactTable, type ColumnPinningState } from '@tanstack/react-table';
import { useState } from 'react';

const useVirtualTable = <T>(
	columns: VirtualTableProps<T>['columns'],
	data: T[],
	options: {
		columnsVisibilityConfig?: VirtualTableProps<T>['columnsVisibilityConfig'];
		columnsPiningConfig?: VirtualTableProps<T>['columnsPiningConfig'];
	},
) => {
	const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>(
		options?.columnsVisibilityConfig
			? (options?.columnsVisibilityConfig as Record<string, boolean>)
			: {},
	);
	const [columnPinning, setColumnPinning] = useState<ColumnPinningState>(
		options.columnsPiningConfig || {},
	);

	const table = useReactTable({
		data,
		columns,
		state: { columnVisibility, columnPinning },
		onColumnVisibilityChange: setColumnVisibility,
		getCoreRowModel: getCoreRowModel(),
		onColumnPinningChange: setColumnPinning,
	});

	const { getHeaderGroups, getRowModel } = table;

	const changeColumnsVisibility = (
		newColumnsVisibilityConfig?: VirtualTableProps<T>['columnsVisibilityConfig'],
	) => {
		setColumnVisibility(newColumnsVisibilityConfig as Record<string, boolean>);
	};

	const changeColumnsPining = (
		newColumnsPiningConfig?: VirtualTableProps<T>['columnsPiningConfig'],
	) => {
		setColumnPinning(newColumnsPiningConfig || {});
	};

	return {
		getHeaderGroups,
		getRowModel,
		changeColumnsVisibility,
		changeColumnsPining,
	};
};

export { useVirtualTable };
