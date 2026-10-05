import { createVirtualTable } from '@core';
import {
	MaterialsColumns,
	materialsPlaceholders,
} from '@features/materials/constants/materials-table-columns.constants';
import type { Material } from '@features/materials/types';
import { useAppDispatch, useSliceField } from '@store';
import { useRef, useState } from 'react';

const MaterialsVirtualTable = createVirtualTable<Material>();

interface Props {
	onRowClick?: (patient: Material) => void;
	activeMaterialId?: string;
}

export const MaterialsTableWrapper = ({ onRowClick, activeMaterialId }: Props) => {
	const dispatch = useAppDispatch();
	const scrollParentRef = useRef<HTMLDivElement | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);
	const isLoading = useSliceField('patientsSlice', 'loadings', 'getPatients');

	return (
		<div className="flex h-full w-full flex-col gap-2">
			<div
				ref={scrollParentRef}
				className="flex h-full w-full overflow-auto rounded-primary [scrollbar-gutter:stable]"
			>
				<MaterialsVirtualTable
					data={materialsPlaceholders}
					columns={MaterialsColumns}
					contentRowHeight={50}
					externalParentRef={scrollParentRef}
					infiniteScrollOptions={{
						isLoading,
						totalCount,
						currentPage,
						fetchCallback: () => {},
					}}
					onRowClick={onRowClick}
				/>
			</div>
		</div>
	);
};
