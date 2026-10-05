import { APP_ROUTES } from '@core/constants';
import { HOME_ROUTES } from '@features/home/constants';
import { NavLink } from 'react-router';

export const NavbarAppointmentLink = () => {
	return (
		<NavLink
			to={`${APP_ROUTES.home.path}${HOME_ROUTES.appointment.path}`}
			className="flex h-[52px] w-[213px] items-center justify-center rounded-[30px] bg-primary2 text-[20px] font-medium leading-[22px] text-white hover:bg-primary2/90"
		>
			Запись онлайн
		</NavLink>
	);
};
