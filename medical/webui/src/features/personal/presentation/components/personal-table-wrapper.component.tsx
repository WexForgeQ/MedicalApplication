import { createVirtualTable, LoadingProccessBar } from '@core';
import { PersonalColumns } from '@features/personal/constants';
import { getPersonal } from '@features/personal/services';
import type { Personal } from '@features/personal/types';
import { useAppDispatch, useSliceField } from '@store';
import { useEffect, useMemo, useRef, useState } from 'react';

const PersonalVirtualTable = createVirtualTable<Personal>();

interface Props {
	onRowClick?: (personal: Personal) => void;
	activePersonalId?: string;
}

export const PersonalTableWrapper = ({ onRowClick, activePersonalId }: Props) => {
	const dispatch = useAppDispatch();
	const scrollParentRef = useRef<HTMLDivElement | null>(null);
	const [personal, setPersonal] = useState<Personal[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);

	const isLoading = useSliceField('personalSlice', 'loadings', 'getPersonal');

	const loadPersonal = (page: number, reset = false) => {
		dispatch(getPersonal({ pageNumber: page, pageSize: 15 }))
			.unwrap()
			.then((data) => {
				setPersonal((prev) =>
					reset ? (data.data?.items ?? []) : [...prev, ...(data.data?.items ?? [])],
				);
				setTotalCount(data.data?.totalCount ?? 0);
				setCurrentPage(page);
			})
			.catch(() => {});
	};

	useEffect(() => {
		loadPersonal(1, true);
	}, []);

	const activePersonal = useMemo(() => {
		if (!activePersonalId) return undefined;
		return personal.find((p) => p.id === activePersonalId);
	}, [activePersonalId, personal]);

	const isInitialLoad = personal.length === 0 && isLoading;

	return (
		<div className="flex h-full w-full flex-col gap-2">
			{isInitialLoad && (
				<div className="flex items-center justify-center py-4">
					<LoadingProccessBar bgClassName="w-full max-w-[500px]" />
				</div>
			)}
			<div
				ref={scrollParentRef}
				className="flex h-full w-full overflow-auto rounded-primary [scrollbar-gutter:stable]"
			>
				<PersonalVirtualTable
					classNames={{
						componentWrapperClassName: 'w-full',
						tableClassName: 'w-full',
						contentRowClassName: 'mt-[10px]',
					}}
					data={personal}
					columns={PersonalColumns}
					contentRowHeight={50}
					externalParentRef={scrollParentRef}
					infiniteScrollOptions={{
						isLoading,
						totalCount,
						currentPage,
						fetchCallback: (nextPage) => loadPersonal(nextPage),
					}}
					activeItem={activePersonal}
					getRowId={(row) => row.id}
					onRowClick={onRowClick}
				/>
			</div>
		</div>
	);
};
