import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

interface PaginationItemProps {
	isSelected: boolean;
	num: number;
	onClick: (value: number) => void;
}

export const PaginationItem = memo(({ isSelected, num, onClick }: PaginationItemProps) => {
	return (
		<div
			className={twMerge(
				'flex size-[32px] items-center justify-center rounded-[8px] border-[1px]',
				isSelected
					? 'border-primary text-primary'
					: 'cursor-pointer border-noActive text-text hover:border-primary hover:text-primary',
			)}
			onClick={() => !isSelected && onClick(num)}
		>
			<p className="[font-feature-settings:'liga'_off,'clig'_off'] text-[14px] leading-[1.42857] tracking-[0.1px]">
				{num}
			</p>
		</div>
	);
});
