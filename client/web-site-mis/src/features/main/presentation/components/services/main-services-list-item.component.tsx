import { NavLinkArrow } from '@core';
import type { ServicesListItemProps } from '@features/services/types';

interface MainServicesListItemProps extends ServicesListItemProps {
	index: number;
}

export const MainServicesListItem = (props: MainServicesListItemProps) => {
	return (
		<div
			className="flex h-[193px] w-[280px] animate-fadeIn items-center justify-center rounded-[20px] bg-white opacity-0"
			style={{
				animationDelay: `${props.index * 0.01}s`,
			}}
		>
			<div className="flex flex-col items-center gap-[20px]">
				<p className="text-[22px] font-semibold leading-normal text-primary">
					{props.title}
				</p>
				<NavLinkArrow to={props.linkTo} />
			</div>
		</div>
	);
};
