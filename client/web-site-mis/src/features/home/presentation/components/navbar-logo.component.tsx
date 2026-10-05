import { AppLogoIcon } from '@core';
import { APP_ROUTES } from '@core/constants';
import { HOME_ROUTES } from '@features/home/constants';
import { NavLink } from 'react-router';
import { twMerge } from 'tailwind-merge';

interface NavbarLogoProps {
	className?: string;
}

export const NavbarLogo = ({ className }: NavbarLogoProps) => {
	return (
		<NavLink
			className={twMerge('flex flex-row items-center gap-[18px] text-primary', className)}
			to={`${APP_ROUTES.home.path}${HOME_ROUTES.main.path}`}
		>
			<AppLogoIcon className="size-[48px]" />
			<p className="text-[30px] font-semibold leading-none">DevMed</p>
		</NavLink>
	);
};
