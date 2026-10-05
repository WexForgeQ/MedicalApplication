import { SlotCard } from '@features/slots';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { CalendarDay } from '../../utils/calendar.helpers';
import { CalendarGrid } from './calendar-grid.component';

export const AppointmentsCalendar = () => {
	const [search] = useSearchParams();

	const today = new Date();
	const [yearAndMonth, setYearAndMonth] = useState<[number, number]>([
		today.getFullYear(),
		today.getMonth() + 1,
	]);
	const [selectedDate, setSelectedDate] = useState<string | null>(null);

	const handleDayClick = (day: CalendarDay) => {
		if (!selectedDate) setSelectedDate(day.dateString);
		else if (selectedDate === day.dateString) setSelectedDate(null);
		else setSelectedDate(day.dateString);
	};

	return (
		<div className="flex w-full gap-[60px] p-4">
			<CalendarGrid
				yearAndMonth={yearAndMonth}
				onYearAndMonthChange={setYearAndMonth}
				selectedDate={selectedDate}
				onDayClick={handleDayClick}
				renderDay={(day) => <div className="px-2 pb-2"></div>}
			/>
			{search.get('slotId') && (
				<div className="flex h-full w-full max-w-screen-sm items-center justify-center bg-white">
					<SlotCard slotId={search.get('slotId')} appointmentMode />
				</div>
			)}
		</div>
	);
};
