import type { NavbarItemConfig } from '@features/home/types';
import { NavLink } from 'react-router';
import { twMerge } from 'tailwind-merge';

export const FooterNavItem = ({ label, path, width }: NavbarItemConfig) => {
	return (
		<NavLink
			style={{
				width: width,
			}}
			to={path}
			className={({ isActive }) =>
				twMerge(
					'leading-none text-white',
					isActive ? 'font-bold' : 'font-medium hover:font-bold',
				)
			}
		>
			{label}
		</NavLink>
	);
};
