import { Select } from '@core';
import { ChevronIcon } from '@core/presentation/components/icons';
import { addDays, format, parse, subDays } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import {
	createDaysForCurrentMonth,
	createDaysForNextMonth,
	createDaysForPreviousMonth,
	DAYS_OF_WEEK,
	getMonthDropdownOptions,
	getYearDropdownOptions,
	isWeekendDay,
	type CalendarDay,
} from '../../utils/calendar.helpers';
import { AppointmentsCalendarList } from './appointments-calendar-list.component';

interface CalendarGridProps {
	className?: string;
	yearAndMonth?: [number, number];
	onYearAndMonthChange?: (yearAndMonth: [number, number]) => void;
	renderDay?: (day: CalendarDay) => React.ReactNode;
	onDayClick?: (day: CalendarDay) => void;
	selectedDate?: string | null;
}

export const CalendarGrid = ({
	className = '',
	yearAndMonth,
	onYearAndMonthChange,
	renderDay = (day) => <div className="p-2 font-bold">{day.dayOfMonth}</div>,
	onDayClick,
	selectedDate,
}: CalendarGridProps) => {
	const today = new Date();
	const [internalYearAndMonth, setInternalYearAndMonth] = useState<[number, number]>(
		yearAndMonth || [today.getFullYear(), today.getMonth() + 1],
	);

	const [clickedDayRow, setClickedDayRow] = useState<number | null>(null);

	const currentYearAndMonth = yearAndMonth || internalYearAndMonth;
	const setYearAndMonth = onYearAndMonthChange || setInternalYearAndMonth;

	const [year, month] = currentYearAndMonth;

	const calendarGridDayObjects = useMemo(() => {
		const currentMonthDays = createDaysForCurrentMonth(year, month);
		const previousMonthDays = createDaysForPreviousMonth(year, month, currentMonthDays);
		const nextMonthDays = createDaysForNextMonth(year, month, currentMonthDays);

		return [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];
	}, [year, month]);

	const handleMonthNavBack = () => {
		let nextYear = year;
		let nextMonth = month - 1;
		if (nextMonth === 0) {
			nextMonth = 12;
			nextYear = year - 1;
		}
		setYearAndMonth([nextYear, nextMonth]);
	};

	const handleMonthNavForward = () => {
		let nextYear = year;
		let nextMonth = month + 1;
		if (nextMonth === 13) {
			nextMonth = 1;
			nextYear = year + 1;
		}
		setYearAndMonth([nextYear, nextMonth]);
	};

	const handleDayClick = (day: CalendarDay, rowIndex: number) => {
		if (onDayClick) {
			onDayClick(day);
		}
		setClickedDayRow(clickedDayRow === rowIndex ? null : rowIndex);
	};

	const handleDayNavigation = (direction: 'prev' | 'next') => {
		if (!selectedDate) return;

		const currentDate = parse(selectedDate, 'dd.MM.yyyy', new Date());
		const newDate = direction === 'prev' ? subDays(currentDate, 1) : addDays(currentDate, 1);
		const newDateString = format(newDate, 'dd.MM.yyyy');

		const newYear = newDate.getFullYear();
		const newMonth = newDate.getMonth() + 1;
		if (newYear !== year || newMonth !== month) {
			setYearAndMonth([newYear, newMonth]);
		}

		const newDay: CalendarDay = {
			dateString: newDateString,
			dayOfMonth: newDate.getDate(),
			isCurrentMonth: newYear === year && newMonth === month,
		};

		if (onDayClick) {
			onDayClick(newDay);
		}
	};

	const monthOptions = useMemo(() => getMonthDropdownOptions(), []);
	const yearOptions = useMemo(() => getYearDropdownOptions(year), [year]);

	const dayRows = useMemo(() => {
		const rows: CalendarDay[][] = [];
		for (let i = 0; i < calendarGridDayObjects.length; i += 7) {
			rows.push(calendarGridDayObjects.slice(i, i + 7));
		}
		return rows;
	}, [calendarGridDayObjects]);

	const currentMonthName = format(new Date(year, month - 1, 1), 'MMMM yyyy', { locale: ru });

	return (
		<div className={twMerge('w-full', className)}>
			<div className="mb-4 flex items-center justify-between gap-4 bg-white px-[6px] py-[4px]">
				<div className="flex items-center gap-2">
					<Select
						options={monthOptions}
						value={month}
						onChange={(value) => setYearAndMonth([year, value as number])}
						buttonClassName="bg-[#F5F5F5] h-[40px] bg-white rounded-primary text-[20px] min-w-[150px]"
						wrapperClassname="min-w-[150px] bg-white"
						buttonLabelClassName="text-primary text-[20px]"
					/>
					<Select
						options={yearOptions}
						value={year}
						onChange={(value) => setYearAndMonth([value as number, month])}
						buttonClassName="bg-[#F5F5F5] h-[40px] rounded-primary text-[20px] min-w-[150px] bg-white"
						optionsClassName="w-full bg-white"
						wrapperClassname="min-w-[100px] "
						buttonLabelClassName="text-primary text-[20px]"
					/>
				</div>

				<div className="flex items-center gap-2">
					{selectedDate && (
						<>
							<button
								onClick={() => handleDayNavigation('prev')}
								className="flex h-[40px] w-[40px] items-center justify-center rounded-primary bg-[#F5F5F5] transition-colors hover:bg-primary hover:text-white"
								type="button"
							>
								<ChevronIcon className="rotate-90" fill="currentColor" />
							</button>

							<button
								onClick={() => handleDayNavigation('next')}
								className="flex h-[40px] w-[40px] items-center justify-center rounded-primary bg-[#F5F5F5] transition-colors hover:bg-primary hover:text-white"
								type="button"
							>
								<ChevronIcon className="-rotate-90" fill="currentColor" />
							</button>
						</>
					)}
					<button
						onClick={handleMonthNavBack}
						className="flex h-[40px] w-[40px] items-center justify-center rounded-primary bg-[#F5F5F5] transition-colors hover:bg-primary hover:text-white"
						type="button"
					>
						<ChevronIcon className="rotate-90" fill="currentColor" />
					</button>
					<button
						onClick={handleMonthNavForward}
						className="flex h-[40px] w-[40px] items-center justify-center rounded-primary bg-[#F5F5F5] transition-colors hover:bg-primary hover:text-white"
						type="button"
					>
						<ChevronIcon className="-rotate-90" fill="currentColor" />
					</button>
				</div>
			</div>

			<div className="mb-2 grid grid-cols-7 gap-[2px]">
				{DAYS_OF_WEEK.map((day, index) => (
					<div
						key={day}
						className={twMerge(
							'p-2 text-center text-[14px] font-semibold text-primaryDark',
							(index === 5 || index === 6) && 'text-error',
						)}
					>
						{day}
					</div>
				))}
			</div>

			<div className="rounded-primary border-2 border-bgGray bg-bgGray p-[2px]">
				{dayRows.map((row, rowIndex) => (
					<div key={rowIndex}>
						<div className="mb-[2px] grid grid-cols-7 gap-[2px] last:mb-0">
							{row.map((day) => {
								const isSelected = selectedDate === day.dateString;
								const isWeekend = isWeekendDay(day.dateString);
								const isToday =
									day.dateString === format(new Date(), 'dd.MM.yyyy') &&
									day.isCurrentMonth;

								return (
									<div
										key={day.dateString}
										onClick={() => handleDayClick(day, rowIndex)}
										className={twMerge(
											'relative flex min-h-[100px] cursor-pointer flex-col items-center justify-center rounded-[5px] bg-white transition-colors hover:bg-primary/5',
											!day.isCurrentMonth && 'opacity-40',
											isToday && 'border-2 border-green-700',
											isSelected && 'border-2 border-primary',
										)}
									>
										<div
											className={twMerge(
												'p-2 text-center text-[14px] font-bold',
												!day.isCurrentMonth && 'text-textGray',
												isWeekend && 'text-error',
												isSelected && 'text-primary',
											)}
										>
											{day.dayOfMonth}
										</div>
									</div>
								);
							})}
						</div>
						{clickedDayRow === rowIndex && selectedDate && (
							<div className="mb-[2px] h-[100px] w-full bg-white p-4">
								<AppointmentsCalendarList currentDay={selectedDate} />
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
