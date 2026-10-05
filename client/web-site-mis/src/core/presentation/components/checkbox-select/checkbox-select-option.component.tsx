import type { SelectOption, SelectVariants } from '@core/types';
import { twMerge } from 'tailwind-merge';
import { Checkbox } from '../checkbox';

const optionClassNameVariants: Record<SelectVariants, string> = {
	white: 'bg-[#F6F5FA]',
	gray: 'bg-white',
};

export interface CheckboxSelectOptionClassNames {
	wrapperClassName?: string;
	checkboxClassName?: string;
	labelClassName?: string;
}

interface CheckboxSelectOptionProps {
	option: SelectOption;
	isSelected: boolean;
	onClick: (value: string) => void;
	classNames?: CheckboxSelectOptionClassNames;
	variant: SelectVariants;
}

export const CheckboxSelectOption = ({
	option,
	isSelected,
	classNames,
	onClick,
	variant,
}: CheckboxSelectOptionProps) => {
	return (
		<div
			className={twMerge(
				'flex h-[60px] w-full flex-shrink-0 cursor-pointer flex-row items-center gap-[15px] rounded-[25px] bg-[#F6F5FA] pl-[20px] hover:opacity-90',
				optionClassNameVariants[variant],
				classNames?.wrapperClassName,
			)}
			onClick={() => onClick(option.value)}
		>
			<Checkbox value={isSelected} className={classNames?.checkboxClassName} />
			<p
				className={twMerge(
					'max-w-[85%] truncate text-[18px] leading-normal text-[#737373]',
					classNames?.labelClassName,
				)}
				title={option.label}
			>
				{option.label}
			</p>
		</div>
	);
};
