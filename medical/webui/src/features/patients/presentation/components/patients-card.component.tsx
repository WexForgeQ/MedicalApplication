import {
	Button,
	HumanEntityCardEmpty,
	HumanEntityCardInfo,
	HumanEntityCardTitle,
	LoadingProccessBar,
} from '@core';
import { getPatientById } from '@features/patients/services';
import type { PatientFormType } from '@features/patients/types';
import { useAppDispatch, useSliceField } from '@store';
import { useEffect, useState } from 'react';

interface Props {
	patientId?: string;
	onEdit?: (id: string) => void;
	onDelete?: (id: string) => void;
}

export const PatientCard = ({ patientId, onEdit, onDelete }: Props) => {
	const dispatch = useAppDispatch();
	const [patient, setPatient] = useState<PatientFormType | null>(null);
	const isLoading = useSliceField('patientsSlice', 'loadings', 'getPatientById');

	useEffect(() => {
		if (patientId) {
			dispatch(getPatientById({ id: patientId }))
				.unwrap()
				.then((response) => {
					setPatient(response.data || null);
				})
				.catch(() => {
					setPatient(null);
				});
		} else {
			setPatient(null);
		}
	}, [patientId]);

	if (isLoading) {
		return (
			<div className="flex h-full w-full max-w-[500px] flex-col items-center justify-center rounded-primary bg-white px-[40px] py-[25px]">
				<LoadingProccessBar bgClassName="w-full max-w-[300px]" />
			</div>
		);
	}

	return (
		<div className="flex h-full w-full max-w-[500px] flex-col items-center rounded-primary bg-white px-[40px] py-[25px]">
			{patient ? (
				<div className="flex h-full w-full flex-col items-center gap-[15px]">
					<div className="flex size-full w-full flex-col items-center gap-[30px]">
						<div className="flex h-fit w-full flex-col items-center gap-[15px]">
							<HumanEntityCardTitle humanEntity={patient} />
						</div>

						<HumanEntityCardInfo humanEntity={patient} />

						<div className="mt-auto flex w-full justify-center gap-[20px]">
							<Button
								className="w-[120px]"
								onClick={() => patient.id && onEdit?.(patient.id)}
							>
								Редактировать
							</Button>
							<Button
								className="w-[120px] bg-red-500 text-white"
								onClick={() => patient.id && onDelete?.(patient.id)}
							>
								Удалить
							</Button>
						</div>
					</div>
				</div>
			) : (
				<HumanEntityCardEmpty />
			)}
		</div>
	);
};
