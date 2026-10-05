import type { SelectOption, SelectVariants } from '@core/types';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import {
	CheckboxSelectOption,
	type CheckboxSelectOptionClassNames,
} from './checkbox-select-option.component';

const popoverClassNameVariants: Record<SelectVariants, string> = {
	white: 'bg-white',
	gray: 'bg-[#F6F5FA]',
};

const inputClassNameVariants: Record<SelectVariants, string> = {
	white: 'bg-white',
	gray: 'bg-[#F6F5FA]',
};

export interface CheckboxSelectPopoverClassNames {
	wrapperClassName?: string;
	searchInputClassName?: string;
	optionListClassName?: string;
	optionClassName?: CheckboxSelectOptionClassNames;
}

export interface CheckboxSelectPopoverProps {
	classNames?: CheckboxSelectPopoverClassNames;
	searchable?: boolean;
	options: SelectOption[];
	value: string[];
	searchValue: string;
	isOpen: boolean;
	onSelect: (value: string) => void;
	onSearchValueChange: (value: string) => void;
	variant: SelectVariants;
}

export const CheckboxSelectPopover = ({
	classNames,
	isOpen,
	searchValue,
	searchable = false,
	value,
	options,
	onSelect,
	onSearchValueChange,
	variant,
}: CheckboxSelectPopoverProps) => {
	const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const [localSearchValue, setLocalValueSearchValue] = useState<string>(searchValue);

	const clearSearchTimeout = () => {
		if (!!searchTimeoutRef.current) {
			clearTimeout(searchTimeoutRef.current);
			searchTimeoutRef.current = null;
		}
	};

	useEffect(() => {
		if (!isOpen) return;
		clearSearchTimeout();
		searchTimeoutRef.current = setTimeout(() => {
			onSearchValueChange(localSearchValue);
		}, 150);
		return () => {
			clearSearchTimeout();
		};
	}, [localSearchValue, isOpen, onSearchValueChange]);

	useEffect(() => {
		if (!isOpen) return;
		setLocalValueSearchValue(searchValue);
	}, [searchValue, isOpen]);

	return isOpen ? (
		<div
			className={twMerge(
				'absolute left-0 top-[52px] z-10 flex w-full flex-col rounded-[25px] bg-white p-[2px]',
				popoverClassNameVariants[variant],
				classNames?.wrapperClassName,
			)}
		>
			{!!searchable && (
				<input
					type="text"
					className={twMerge(
						'flex h-[60px] w-full rounded-[25px] px-[20px] text-[18px] leading-normal text-[#737373] outline-none',
						inputClassNameVariants[variant],
						classNames?.searchInputClassName,
					)}
					placeholder="Поиск"
					value={localSearchValue}
					onChange={(e) => setLocalValueSearchValue(e.target.value)}
				/>
			)}
			<div
				className={twMerge(
					'flex max-h-[455px] w-full flex-col gap-[5px] overflow-y-auto',
					classNames?.optionListClassName,
				)}
			>
				{options.map((option) => (
					<CheckboxSelectOption
						key={option.value}
						classNames={classNames?.optionClassName}
						option={option}
						onClick={onSelect}
						isSelected={value.includes(option.value)}
						variant={variant}
					/>
				))}
			</div>
		</div>
	) : null;
};
