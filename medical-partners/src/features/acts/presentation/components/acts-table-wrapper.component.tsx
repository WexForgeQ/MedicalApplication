import {
	createVirtualTable,
	LoadingProccessBar,
	SimpleTableCell,
	SimpleTableHeaderCell,
} from '@core';
import { ActsColumns } from '@features/acts/constants';
import { downloadActDocument, getActs } from '@features/acts/services';
import type { Act } from '@features/acts/types/acts.types';
import { useAppDispatch, useSliceField } from '@store';
import { useEffect, useRef, useState } from 'react';

const ActsVirtualTable = createVirtualTable<Act>();

export const ActsTableWrapper = () => {
	const dispatch = useAppDispatch();
	const scrollParentRef = useRef<HTMLDivElement | null>(null);
	const [acts, setActs] = useState<Act[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);

	const isLoading = useSliceField('actsSlice', 'loadings', 'getActs');

	const loadActs = (page: number, reset = false) => {
		dispatch(getActs({ pageNumber: page, pageSize: 15 }))
			.unwrap()
			.then((data) => {
				setActs((prev) =>
					reset ? (data.data?.items ?? []) : [...prev, ...(data.data?.items ?? [])],
				);
				setTotalCount(data.data?.totalCount ?? 0);
				setCurrentPage(page);
			})
			.catch(() => {});
	};

	useEffect(() => {
		loadActs(1, true);
	}, []);

	const handleDownload = (id: string) => {
		dispatch(downloadActDocument({ id }))
			.unwrap()
			.then((res) => {
				if (res.data) {
					window.open(res.data as string, '_blank', 'noopener,noreferrer');
				}
			})
			.catch(() => {});
	};

	const isInitialLoad = acts.length === 0 && isLoading;

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
				<ActsVirtualTable
					data={acts}
					columns={[
						...ActsColumns,
						{
							accessorKey: 'id',
							id: 'id',
							header: () => (
								<SimpleTableHeaderCell
									textClassName="text-[12px] w-fit text-center text-primary"
									text="Действия"
								/>
							),
							cell: (info) => (
								<SimpleTableCell
									content={
										<p
											className="w-fit cursor-pointer text-center text-primary underline"
											onClick={() =>
												handleDownload(info.getValue() as string)
											}
										>
											Скачать
										</p>
									}
								/>
							),
						},
					]}
					contentRowHeight={50}
					externalParentRef={scrollParentRef}
					infiniteScrollOptions={{
						isLoading,
						totalCount,
						currentPage,
						fetchCallback: (nextPage) => loadActs(nextPage),
					}}
				/>
			</div>
		</div>
	);
};
