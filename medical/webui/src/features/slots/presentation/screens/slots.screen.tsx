import { deleteSlot } from '@features/slots/services';
import type { Slot } from '@features/slots/types';
import { useAppDispatch, useSliceField } from '@store';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlotCard, SlotForm, SlotsHeader } from '../components';
import { SlotsTableWrapper } from '../components/slots-table-wrapper.component';

export default () => {
	const [search, setSearchParams] = useSearchParams();
	const [reloadFlag, setReloadFlag] = useState(0);
	const dispatch = useAppDispatch();

	const slotId = search.get('slotId');

	const mode = search.get('edit') ? 'edit' : search.get('add') ? 'add' : undefined;
	const isTableLoading = useSliceField('slotsSlice', 'loadings', 'getSlots');

	const [activeSlot, setActiveSlot] = useState<Slot | undefined>(slotId ? undefined : undefined);

	const handleDelete = (id: string) => {
		dispatch(deleteSlot({ id }))
			.unwrap()
			.then(() => {
				setReloadFlag((f) => f + 1);
				setSearchParams({});
			})
			.catch(() => {});
	};

	const handleEdit = (id: string) => {
		setSearchParams({ edit: 'true', slotId: id });
	};

	const handleRowClick = (slot: Slot) => {
		setActiveSlot(slot);
		if (slot.id) {
			setSearchParams({ slotId: slot.id });
		}
	};

	const handleAddClick = () => {
		setSearchParams({ add: 'true' });
	};

	return (
		<div className="flex size-full flex-col gap-[40px] py-[10px] pb-[40px] pl-[60px] pr-[40px]">
			<SlotsHeader onAddClick={handleAddClick} isLoading={isTableLoading} />
			<div className="flex size-full gap-[50px]">
				<SlotsTableWrapper
					key={reloadFlag}
					setActiveSlot={handleRowClick}
					slot={activeSlot}
				/>
				{mode ? (
					<SlotForm
						slotId={slotId || undefined}
						onSuccess={() => {
							setReloadFlag((f) => f + 1);
							setSearchParams({});
						}}
						mode={mode}
					/>
				) : (
					<SlotCard slotId={slotId} onEdit={handleEdit} onDelete={handleDelete} />
				)}
			</div>
		</div>
	);
};
