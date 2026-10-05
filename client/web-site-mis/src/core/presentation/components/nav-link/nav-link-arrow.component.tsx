import { LinkArrowIcon } from '@core';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface NavLinkArrowProps {
	to: string;
	className?: string;
}

export const NavLinkArrow = ({ to, className }: NavLinkArrowProps) => {
	return (
		<NavLink
			className={twMerge(
				'flex size-[50px] items-center justify-center rounded-full bg-primary2 hover:bg-primary2/90',
				className,
			)}
			to={to}
		>
			<LinkArrowIcon className="size-[20px] text-white" />
		</NavLink>
	);
};
