import { useAppNavigate } from '@core/utils';
import type { Slot } from '@features/slots';
import { getSlots, SlotStatus } from '@features/slots';
import { useAppDispatch } from '@store';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type Props = {
	currentDay: string;
};

export const AppointmentsCalendarList = ({ currentDay }: Props) => {
	const dispatch = useAppDispatch();
	const [slots, setSlots] = useState<Slot[]>([]);

	const navigate = useAppNavigate();
	const [search] = useSearchParams();
	const slotId = search.get('slotId');
	const [specializations, setSpecializations] = useState<Array<{ label: string; value: string }>>(
		[],
	);

	useEffect(() => {
		dispatch(getSlots({ pageNumber: 1, pageSize: 100000, date: currentDay }))
			.unwrap()
			.then((res) => {
				setSlots(res.data?.items || []);
			})
			.catch(() => {});
	}, [currentDay, dispatch]);

	const groupedSlots = slots.reduce<Record<string, Slot[]>>((acc, slot) => {
		const doctorName = slot.doctor.fio;
		if (!acc[doctorName]) {
			acc[doctorName] = [];
		}
		acc[doctorName].push(slot);
		return acc;
	}, {});

	return (
		<div className="flex size-full flex-col gap-6">
			{Object.entries(groupedSlots).map(([doctorName, doctorSlots]) => {
				const hasActiveSlot = doctorSlots.some((s) => s.id === slotId);

				return (
					<div key={doctorName} className="flex flex-col gap-2">
						<h2
							className={twMerge(
								'text-grayText text-lg font-semibold',
								hasActiveSlot && 'text-primary',
							)}
						>
							{doctorName}
						</h2>
						<div className="flex flex-wrap gap-2">
							{doctorSlots.map((slot) => (
								<div
									key={slot.id}
									className={twMerge(
										'px-3 py-1',
										slot.status === SlotStatus.Free
											? 'border-grayText cursor-pointer rounded-[20px] border-2 hover:bg-primary/10'
											: 'cursor-not-allowed bg-red-200',
										slot.id === slotId && 'border-primary',
									)}
									onClick={() => navigate('', { slotId: slot.id })}
								>
									{slot.time}
								</div>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};
