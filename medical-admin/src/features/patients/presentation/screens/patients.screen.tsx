import { useAppNavigate } from '@core/utils';
import { deletePatient } from '@features/patients/services';
import { useAppDispatch, useSliceField } from '@store';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PatientsHeader, PatientsTableWrapper } from '../components';

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

	return (
		<div className="flex size-full flex-col gap-[40px] overflow-auto py-[10px] pb-[40px] pl-[10px] pr-[10px]">
			<PatientsHeader isLoading={isTableLoading} />
			<div className="flex size-full gap-[50px] overflow-auto">
				<PatientsTableWrapper
					key={reloadFlag}
					onDelete={handleDelete}
					activePatientId={patientId || undefined}
				/>
			</div>
		</div>
	);
};
