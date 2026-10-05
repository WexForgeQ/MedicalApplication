import { createVirtualTable, LoadingProccessBar } from '@core';
import { SlotsColumns } from '@features/slots/constants';
import { getSlots } from '@features/slots/services';
import type { Slot } from '@features/slots/types';
import { useAppDispatch, useSliceField } from '@store';
import { useEffect, useMemo, useRef, useState } from 'react';

const SlotsVirtualTable = createVirtualTable<Slot>();

interface Props {
	setActiveSlot: (slot: Slot) => void;
	slot?: Slot;
}

export const SlotsTableWrapper = ({ setActiveSlot, slot }: Props) => {
	const dispatch = useAppDispatch();
	const scrollParentRef = useRef<HTMLDivElement | null>(null);
	const [slots, setSlots] = useState<Slot[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);

	const isLoading = useSliceField('slotsSlice', 'loadings', 'getSlots');

	const loadSlots = (page: number, reset = false) => {
		dispatch(getSlots({ pageNumber: page, pageSize: 15 }))
			.unwrap()
			.then((data) => {
				setSlots((prev) =>
					reset ? (data.data?.items ?? []) : [...prev, ...(data.data?.items ?? [])],
				);
				setTotalCount(data.data?.totalCount ?? 0);
				setCurrentPage(page);
			})
			.catch(() => {});
	};

	useEffect(() => {
		loadSlots(1, true);
	}, []);

	const activeSlot = useMemo(() => {
		if (!slot) return undefined;
		return slots.find((s) => s.id === slot.id);
	}, [slot, slots]);

	const isInitialLoad = slots.length === 0 && isLoading;

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
				<SlotsVirtualTable
					classNames={{
						componentWrapperClassName: 'w-full',
						tableClassName: 'w-full',
						contentRowClassName: 'mt-[10px]',
					}}
					activeItem={activeSlot}
					data={slots}
					columns={SlotsColumns}
					contentRowHeight={50}
					externalParentRef={scrollParentRef}
					infiniteScrollOptions={{
						isLoading,
						totalCount,
						currentPage,
						fetchCallback: (nextPage) => loadSlots(nextPage),
					}}
					onRowClick={setActiveSlot}
				/>
			</div>
		</div>
	);
};
