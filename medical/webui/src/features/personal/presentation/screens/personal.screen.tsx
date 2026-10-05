import { useAppNavigate } from '@core/utils';
import { deletePersonal } from '@features/personal/services';
import { useAppDispatch, useSliceField } from '@store';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PersonalCard, PersonalHeader, PersonalTableWrapper } from '../components';
import { PersonalForm } from '../components/personal-form.component';

export default () => {
	const [search, setSearchParams] = useSearchParams();
	const [reloadFlag, setReloadFlag] = useState(0);
	const dispatch = useAppDispatch();
	const navigate = useAppNavigate();

	const personalId = search.get('personalId');
	const mode = search.get('edit') ? 'edit' : search.get('add') ? 'add' : undefined;
	const isTableLoading = useSliceField('personalSlice', 'loadings', 'getPersonal');

	const handleDelete = (id: string) => {
		dispatch(deletePersonal({ id }))
			.unwrap()
			.then(() => {
				setReloadFlag((f) => f + 1);
				setSearchParams({});
			})
			.catch(() => {});
	};

	const handleEdit = (id: string) => {
		setSearchParams({ edit: 'true', personalId: id });
	};

	const handleRowClick = (personal: { id?: string }) => {
		if (personal.id) {
			setSearchParams({ personalId: personal.id });
		}
	};

	return (
		<div className="flex size-full flex-col gap-[40px] py-[10px] pb-[40px] pl-[60px] pr-[40px]">
			<PersonalHeader isLoading={isTableLoading} />
			<div className="flex size-full gap-[50px]">
				<PersonalTableWrapper
					key={reloadFlag}
					onRowClick={handleRowClick}
					activePersonalId={personalId || undefined}
				/>
				{mode ? (
					<PersonalForm
						personalId={personalId || undefined}
						onSuccess={() => {
							setReloadFlag((f) => f + 1);
							setSearchParams({});
						}}
						mode={mode}
					/>
				) : (
					<PersonalCard
						personalId={personalId || undefined}
						onEdit={handleEdit}
						onDelete={handleDelete}
					/>
				)}
			</div>
		</div>
	);
};
