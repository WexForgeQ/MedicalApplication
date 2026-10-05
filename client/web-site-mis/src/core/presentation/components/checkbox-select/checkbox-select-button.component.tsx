import type { SelectVariants } from '@core/types';
import { twMerge } from 'tailwind-merge';
import { CheckboxButtonArrow } from '../icons';

const buttonClassNameVariants: Record<SelectVariants, string> = {
	white: 'bg-white enabled:hover:bg-white/80',
	gray: 'bg-[#F6F5FA] enabled:hover:bg-[#F6F5FA]/80',
};

export interface CheckboxSelectButtonProps {
	onClick: () => void;
	title: string;
	className?: string;
	disabled?: boolean;
	variant: SelectVariants;
}

export const CheckboxSelectButton = ({
	title,
	onClick,
	className,
	variant,
	disabled,
}: CheckboxSelectButtonProps) => {
	return (
		<button
			className={twMerge(
				'flex h-[50px] w-full cursor-pointer flex-row items-center justify-between rounded-[25px] bg-white pl-[20px] pr-[18px] enabled:hover:bg-white/80 disabled:opacity-80',
				buttonClassNameVariants[variant],
				className,
			)}
			disabled={disabled}
			onClick={onClick}
			title={title}
		>
			<p className="w-[90%] truncate text-start text-[16px] leading-normal text-primary">
				{title}
			</p>
			<CheckboxButtonArrow />
		</button>
	);
};
