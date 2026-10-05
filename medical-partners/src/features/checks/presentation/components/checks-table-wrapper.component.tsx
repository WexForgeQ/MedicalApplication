import { CheckStatus } from '@api-gen/api';
import {
	createVirtualTable,
	LoadingProccessBar,
	SimpleTableCell,
	SimpleTableHeaderCell,
} from '@core';
import {
	CHECK_STATUS_TRANSLATIONS,
	ChecksColumns,
	mapCheckStatus,
} from '@features/checks/constants';
import {
	changeCheckStatus,
	deleteCheck,
	downloadCheckDocument,
	getChecks,
} from '@features/checks/services';
import type { Check } from '@features/checks/types/checks.types';
import { useAppDispatch, useSliceField } from '@store';
import { useEffect, useRef, useState } from 'react';

const ChecksVirtualTable = createVirtualTable<Check>();

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (newStatus: CheckStatus) => void;
	selectedStatus: CheckStatus | null;
}

const Modal = ({ isOpen, onClose, onSubmit, selectedStatus }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div className="rounded border-2 border-primary bg-white p-4">
				<h2 className="mb-2 text-lg font-bold">Изменение статуса</h2>
				<div className="flex flex-col">
					{Object.values(CheckStatus).map((status) => (
						<label key={status} className="flex items-center">
							<input
								type="radio"
								name="status"
								value={status}
								checked={selectedStatus === status}
								onChange={(e) => onSubmit(e.target.value as CheckStatus)}
								className="mr-2"
							/>
							{CHECK_STATUS_TRANSLATIONS[status]}
						</label>
					))}
				</div>
				<div className="mt-4 flex justify-end">
					<button onClick={onClose} className="mr-2 rounded p-2">
						Отмена
					</button>
				</div>
			</div>
		</div>
	);
};

export const ChecksTableWrapper = () => {
	const dispatch = useAppDispatch();
	const scrollParentRef = useRef<HTMLDivElement | null>(null);
	const [checks, setChecks] = useState<Check[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);
	const [editingCheckId, setEditingCheckId] = useState<string | null>(null);
	const [selectedStatus, setSelectedStatus] = useState<CheckStatus | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const isLoading = useSliceField('checksSlice', 'loadings', 'getChecks');

	const loadChecks = (page: number, reset = false) => {
		dispatch(getChecks({ pageNumber: page, pageSize: 15 }))
			.unwrap()
			.then((data) => {
				setChecks((prev) =>
					reset ? (data.data?.items ?? []) : [...prev, ...(data.data?.items ?? [])],
				);
				setTotalCount(data.data?.totalCount ?? 0);
				setCurrentPage(page);
			})
			.catch(() => {});
	};

	useEffect(() => {
		loadChecks(1, true);
	}, []);

	const handleDownload = (id: string) => {
		dispatch(downloadCheckDocument({ id }))
			.unwrap()
			.then((res) => {
				if (res.data) {
					window.open(res.data as string, '_blank', 'noopener,noreferrer');
				}
			})
			.catch(() => {});
	};

	const handleDelete = (id: string) => {
		dispatch(deleteCheck({ checkId: id }))
			.unwrap()
			.then((res) => {
				setCurrentPage(1);
				loadChecks(1, true);
			})
			.catch(() => {});
	};

	const handleStatusClick = (checkId: string, currentStatus: CheckStatus) => {
		setEditingCheckId(checkId);
		setSelectedStatus(currentStatus);
		setIsModalOpen(true);
	};

	const handleStatusChange = (newStatus: CheckStatus) => {
		if (editingCheckId) {
			dispatch(changeCheckStatus({ checkId: editingCheckId, newStatus }))
				.unwrap()
				.then(() => {
					setEditingCheckId(null);
					setSelectedStatus(null);
					setIsModalOpen(false);
					setCurrentPage(1);
					loadChecks(1, true);
				})
				.catch(() => {});
		}
	};

	const isInitialLoad = checks.length === 0 && isLoading;

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
				<ChecksVirtualTable
					data={checks}
					columns={[
						...ChecksColumns,
						{
							id: 'status',
							accessorKey: 'status',
							header: () => (
								<SimpleTableHeaderCell
									textClassName="text-[12px] w-full text-center text-primary"
									text="Статус"
								/>
							),
							cell: (info) => (
								<div>
									<SimpleTableCell
										content={
											<p className="cursor-pointer">
												{mapCheckStatus(info.getValue() as CheckStatus)}
											</p>
										}
									/>
								</div>
							),
						},
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
										<div className="flex w-full items-center gap-[10px]">
											<p
												className="w-fit cursor-pointer text-center text-primary underline"
												onClick={() =>
													handleDownload(info.getValue() as string)
												}
											>
												Скачать
											</p>
										</div>
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
						fetchCallback: (nextPage) => loadChecks(nextPage),
					}}
				/>
			</div>
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSubmit={handleStatusChange}
				selectedStatus={selectedStatus}
			/>
		</div>
	);
};
