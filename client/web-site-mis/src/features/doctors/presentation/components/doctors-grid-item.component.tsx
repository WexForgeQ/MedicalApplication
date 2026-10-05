import { NavLinkArrow } from '@core';
import type { CardGridItemProps } from '@core/types';
import type { Doctor } from '@features/doctors/types';
import { twMerge } from 'tailwind-merge';

interface DoctorsGridItemProps extends CardGridItemProps<Doctor> {
	wrapperClassName?: string;
}

export const DoctorsGridItem = ({ data, isLoading, wrapperClassName }: DoctorsGridItemProps) => {
	return (
		<article
			className={twMerge(
				'relative flex h-[377px] w-[280px] animate-fadeIn items-end justify-center rounded-[30px] bg-[#F6F5FA] pb-[18px]',
				isLoading && 'animate-pulse',
				wrapperClassName,
			)}
		>
			{!isLoading && !!data && (
				<img
					className="absolute inset-0 size-full rounded-[30px] object-cover"
					src={data.photoUrl}
				/>
			)}
			<div className="z-[1] flex h-[68px] w-[255px] flex-row items-center justify-between rounded-[30px] bg-[#F5F5F5] pl-[20px] pr-[10px]">
				{!isLoading && !!data && (
					<>
						<div className="flex flex-col gap-px">
							<p className="text-[20px] font-bold leading-[1.35] tracking-[0.2px] text-text">{`${data!.surname} ${data!.name.toUpperCase()[0]} ${data!.patronym.toUpperCase()[0]}`}</p>
							<p className="text-[16px] font-light leading-[1.35] tracking-[0.16px] text-text">
								{data.specialization.name}
							</p>
						</div>
						<NavLinkArrow to="/*" />
					</>
				)}
			</div>
		</article>
	);
};
