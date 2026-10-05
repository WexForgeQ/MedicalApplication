import { addMonths, format, getDay, getDaysInMonth, parse, startOfWeek, subMonths } from 'date-fns';
import { ru } from 'date-fns/locale';

export const DAYS_OF_WEEK = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'] as const;

export interface CalendarDay {
	dateString: string;
	dayOfMonth: number;
	isCurrentMonth: boolean;
	isPreviousMonth?: boolean;
	isNextMonth?: boolean;
}

export function getYearDropdownOptions(currentYear: number) {
	const minYear = currentYear - 4;
	const maxYear = currentYear + 5;
	return Array.from({ length: maxYear - minYear + 1 }, (_, i) => ({
		label: String(minYear + i),
		value: minYear + i,
	}));
}

export function getMonthDropdownOptions() {
	return Array.from({ length: 12 }, (_, i) => ({
		value: i + 1,
		label: format(new Date(2024, i, 1), 'LLLL', { locale: ru }),
	}));
}

export function createDaysForCurrentMonth(year: number, month: number): CalendarDay[] {
	const date = new Date(year, month - 1, 1);
	const daysInMonth = getDaysInMonth(date);

	return Array.from({ length: daysInMonth }, (_, index) => {
		const dayDate = new Date(year, month - 1, index + 1);
		return {
			dateString: format(dayDate, 'dd.MM.yyyy'),
			dayOfMonth: index + 1,
			isCurrentMonth: true,
		};
	});
}

export function createDaysForPreviousMonth(
	year: number,
	month: number,
	currentMonthDays: CalendarDay[],
): CalendarDay[] {
	if (currentMonthDays.length === 0) return [];

	const firstDay = parse(currentMonthDays[0].dateString, 'dd.MM.yyyy', new Date());
	const firstDayWeekday = getDay(firstDay) === 0 ? 6 : getDay(firstDay) - 1;

	if (firstDayWeekday === 0) return [];

	const previousMonth = subMonths(firstDay, 1);
	const startDate = startOfWeek(firstDay, { weekStartsOn: 1 });

	const days: CalendarDay[] = [];
	const daysToAdd = firstDayWeekday;

	for (let i = 0; i < daysToAdd; i++) {
		const dayDate = new Date(startDate);
		dayDate.setDate(startDate.getDate() + i);
		days.push({
			dateString: format(dayDate, 'dd.MM.yyyy'),
			dayOfMonth: dayDate.getDate(),
			isCurrentMonth: false,
			isPreviousMonth: true,
		});
	}

	return days;
}

export function createDaysForNextMonth(
	year: number,
	month: number,
	currentMonthDays: CalendarDay[],
): CalendarDay[] {
	if (currentMonthDays.length === 0) return [];

	const lastDay = parse(
		currentMonthDays[currentMonthDays.length - 1].dateString,
		'dd.MM.yyyy',
		new Date(),
	);
	const lastDayWeekday = getDay(lastDay) === 0 ? 6 : getDay(lastDay) - 1;

	const daysToAdd = 6 - lastDayWeekday;
	if (daysToAdd === 0) return [];

	const firstDayOfNextMonth = addMonths(new Date(year, month - 1, 1), 1);

	const days: CalendarDay[] = [];
	for (let i = 0; i < daysToAdd; i++) {
		const dayDate = new Date(firstDayOfNextMonth);
		dayDate.setDate(firstDayOfNextMonth.getDate() + i);
		days.push({
			dateString: format(dayDate, 'dd.MM.yyyy'),
			dayOfMonth: dayDate.getDate(),
			isCurrentMonth: false,
			isNextMonth: true,
		});
	}

	return days;
}

export function isWeekendDay(dateString: string): boolean {
	const date = parse(dateString, 'dd.MM.yyyy', new Date());
	const weekday = getDay(date);
	return weekday === 0 || weekday === 6;
}
