import { navbarConfig } from '@features/home/constants';
import { NavbarLogo } from '../navbar-logo.component';
import { NavbarAppointmentLink } from './navbar-appointment-link.component';
import { NavbarItem } from './navbar-item.component';

export const Navbar = () => {
	return (
		<header className="flex w-full flex-row items-center justify-center bg-white py-[24px]">
			<NavbarLogo />
			<div className="ml-[174px] mr-[132px] flex flex-row items-center gap-[30px]">
				{navbarConfig.items.map((item) => (
					<NavbarItem
						{...item}
						path={`${navbarConfig.basePath}/${item.path}`}
						key={item.id}
					/>
				))}
			</div>
			<NavbarAppointmentLink />
		</header>
	);
};
