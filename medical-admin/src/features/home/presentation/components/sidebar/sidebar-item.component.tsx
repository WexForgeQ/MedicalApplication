import type { SidebarItemConfig } from '@features/home/types';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface SidebarItemProps extends SidebarItemConfig {
	isSidebarOpen: boolean;
}

export const SidebarItem = ({ label, Icon, path, isSidebarOpen }: SidebarItemProps) => {
	return (
		<NavLink to={path}>
			{({ isActive }) => (
				<div
					className={twMerge(
						'flex h-[48px] flex-row items-center gap-[14px] bg-transparent pl-[32px] text-[16px] font-semibold leading-none text-textGray transition-colors hover:duration-150',
						isSidebarOpen ? 'pl-[32px]' : 'justify-center',
						isActive
							? 'bg-gradient-to-r from-[#96A4FF] to-primary/0 text-primary'
							: 'hover:bg-gradient-to-r hover:from-[#96A4FF]/20 hover:to-primary/0 hover:text-primary',
					)}
				>
					<Icon />
					{isSidebarOpen && <span>{label}</span>}
				</div>
			)}
		</NavLink>
	);
};
