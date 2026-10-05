import { useAppNavigate } from '@core/utils';
import { deletePatient } from '@features/patients/services';
import { useAppDispatch, useSliceField } from '@store';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PatientCard, PatientForm, PatientsHeader, PatientsTableWrapper } from '../components';

export default () => {
	const [search, setSearchParams] = useSearchParams();
	const [reloadFlag, setReloadFlag] = useState(0);
	const dispatch = useAppDispatch();
	const navigate = useAppNavigate();

	const patientId = search.get('patientId');
	const mode = search.get('edit') ? 'edit' : search.get('add') ? 'add' : undefined;
	const isTableLoading = useSliceField('patientsSlice', 'loadings', 'getPatients');

	const handleDelete = (id: string) => {
		dispatch(deletePatient({ id }))
			.unwrap()
			.then(() => {
				setReloadFlag((f) => f + 1);
				setSearchParams({});
			})
			.catch(() => {});
	};

	const handleEdit = (id: string) => {
		setSearchParams({ edit: 'true', patientId: id });
	};

	const handleRowClick = (patient: { id?: string }) => {
		if (patient.id) {
			setSearchParams({ patientId: patient.id });
		}
	};

	return (
		<div className="flex size-full flex-col gap-[40px] py-[10px] pb-[40px] pl-[60px] pr-[40px]">
			<PatientsHeader isLoading={isTableLoading} />
			<div className="flex size-full gap-[50px]">
				<PatientsTableWrapper
					key={reloadFlag}
					onRowClick={handleRowClick}
					activePatientId={patientId || undefined}
				/>
				{mode ? (
					<PatientForm
						patientId={patientId || undefined}
						onSuccess={() => {
							setReloadFlag((f) => f + 1);
							setSearchParams({});
						}}
						mode={mode}
					/>
				) : (
					<PatientCard patientId={patientId || undefined} onEdit={handleEdit} onDelete={handleDelete} />
				)}
			</div>
		</div>
	);
};
