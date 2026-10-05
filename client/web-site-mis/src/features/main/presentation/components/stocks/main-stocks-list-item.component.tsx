import { NavLinkArrow } from '@core';
import type { Stock } from '@features/stocks/types/stocks.types';
import { twMerge } from 'tailwind-merge';

interface MainStocksListItemProps {
	data?: Stock;
	isLoading: boolean;
}

export const MainStocksListItem = ({ data, isLoading }: MainStocksListItemProps) => {
	return (
		<div
			className={twMerge(
				'h-[304px] w-[380px] flex-col gap-[19px] rounded-[20px] bg-white',
				isLoading && 'animate-pulse',
			)}
		>
			{!!data && (
				<>
					<img
						src={data.imageUrl}
						className="h-[127px] w-full rounded-t-[20px] object-cover"
					/>
					<div className="relative flex flex-col pl-[15px] pr-[16px] pt-[19px]">
						<p className="text-[20px] font-semibold leading-normal text-text">
							{data.title}
						</p>
						<p className="mt-[10px] w-[299px] text-[18px] leading-normal text-text">
							{data.description}
						</p>
						<p className="self-end">{data.date}</p>
						<NavLinkArrow to="/*" className="absolute bottom-[22px] right-[16px]" />
					</div>
				</>
			)}
		</div>
	);
};
