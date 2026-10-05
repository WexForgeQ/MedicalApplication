import {
	createVirtualTable,
	LoadingProccessBar,
	SimpleTableCell,
	SimpleTableHeaderCell,
} from '@core';
import { PatientsColumns } from '@features/patients/constants';
import { getPatients } from '@features/patients/services';
import type { Patient } from '@features/patients/types';
import { useAppDispatch, useSliceField } from '@store';
import { useEffect, useMemo, useRef, useState } from 'react';

const PatientsVirtualTable = createVirtualTable<Patient>();

interface Props {
	onDelete: (id: string) => void;
	activePatientId?: string;
}

export const PatientsTableWrapper = ({ onDelete, activePatientId }: Props) => {
	const dispatch = useAppDispatch();
	const scrollParentRef = useRef<HTMLDivElement | null>(null);
	const [patients, setPatients] = useState<Patient[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);

	const isLoading = useSliceField('patientsSlice', 'loadings', 'getPatients');

	const loadPatients = (page: number, reset = false) => {
		dispatch(getPatients({ pageNumber: page, pageSize: 15 }))
			.unwrap()
			.then((data) => {
				setPatients((prev) =>
					reset ? (data.data?.items ?? []) : [...prev, ...(data.data?.items ?? [])],
				);
				setTotalCount(data.data?.totalCount ?? 0);
				setCurrentPage(page);
			})
			.catch(() => {});
	};

	useEffect(() => {
		loadPatients(1, true);
	}, []);

	const activePatient = useMemo(() => {
		if (!activePatientId) return undefined;
		return patients.find((p) => p.id === activePatientId);
	}, [activePatientId, patients]);

	const isInitialLoad = patients.length === 0 && isLoading;

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
				<PatientsVirtualTable
					data={patients}
					columns={[
						...PatientsColumns,
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
											className="w-fit cursor-pointer text-center text-error"
											onClick={() => onDelete(info.getValue() as string)}
										>
											Удалить
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
						fetchCallback: (nextPage) => loadPatients(nextPage),
					}}
					activeItem={activePatient}
				/>
			</div>
		</div>
	);
};
