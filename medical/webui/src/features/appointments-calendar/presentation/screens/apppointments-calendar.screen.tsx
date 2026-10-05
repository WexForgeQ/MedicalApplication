import { AppointmentsCalendar, AppointmentsCalendarHeader } from '../components';

export const AppointmentsCalendarScreen = () => {
	return (
		<div className="flex size-full flex-col gap-[40px] py-[10px] pb-[40px] pl-[60px] pr-[40px]">
			<AppointmentsCalendarHeader isLoading={false} />
			<AppointmentsCalendar />
		</div>
	);
};
