import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { PaginationArrowIcon } from '../icons';

export type PaginationArrowVariants = 'left' | 'right';

interface PaginationArrowProps {
	variant: PaginationArrowVariants;
	onClick: (value: PaginationArrowVariants) => void;
	disabled: boolean;
}

export const PaginationArrow = memo(({ variant, onClick, disabled }: PaginationArrowProps) => {
	return (
		<div
			className={twMerge(
				'flex size-[32px] items-center justify-center rounded-[8px] border-[1px] border-noActive',
				disabled
					? 'text-noActive opacity-80'
					: 'cursor-pointer text-primary hover:border-primary',
			)}
			onClick={() => !disabled && onClick(variant)}
		>
			<PaginationArrowIcon
				className={twMerge('h-[10px] w-[6px]', variant === 'right' && 'rotate-180')}
			/>
		</div>
	);
});
