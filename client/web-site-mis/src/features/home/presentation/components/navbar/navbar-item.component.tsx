import type { NavbarItemConfig } from '@features/home/types';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export const NavbarItem = ({ label, path, width }: NavbarItemConfig) => {
	return (
		<NavLink
			style={{
				width: width,
			}}
			to={path}
			className={({ isActive }) =>
				twMerge(
					'leading-none text-text',
					isActive ? 'font-bold' : 'font-medium hover:font-bold',
				)
			}
		>
			{label}
		</NavLink>
	);
};
