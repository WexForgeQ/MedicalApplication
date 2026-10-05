import type { MainSliderItemProps } from '@features/main/types';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export const MainSliderListItem = (props: MainSliderItemProps) => {
	return (
		<div
			className={twMerge(
				'flex h-[645px] w-[1180px] flex-shrink-0 rounded-[30px] bg-cover bg-center p-[50px]',
				props.position === 'left' ? 'justify-start' : 'justify-end',
			)}
			style={{
				backgroundImage: `url(${props.bgImgSrc})`,
			}}
		>
			<div className="flex h-full w-[510px] flex-col items-center justify-center rounded-[25px] bg-white">
				<p className="w-[424px] text-center text-[40px] font-semibold leading-none text-primary">
					{props.content.title}
				</p>
				<p className="mb-[60px] mt-[40px] w-[390px] text-center text-[18px] leading-[1.222]">
					{props.content.text}
				</p>
				<NavLink
					to={props.content.link.to}
					className="flex h-[52px] items-center rounded-[30px] bg-primary2 px-[35px] text-[20px] leading-none text-white hover:bg-primary2/90"
				>
					{props.content.link.text}
				</NavLink>
			</div>
		</div>
	);
};
