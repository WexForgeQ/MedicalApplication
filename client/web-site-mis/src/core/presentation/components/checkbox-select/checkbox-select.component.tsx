import type { SelectOption, SelectValue, SelectVariants } from '@core/types';
import { useOutsideClick } from '@core/utils';
import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import {
	CheckboxSelectButton,
	type CheckboxSelectButtonProps,
} from './checkbox-select-button.component';
import {
	CheckboxSelectPopover,
	type CheckboxSelectPopoverClassNames,
} from './checkbox-select-popover.component';

interface CheckboxSelectClassNames {
	wrapperClassName?: string;
	popoverClassNames?: CheckboxSelectPopoverClassNames;
	buttonClassName?: CheckboxSelectButtonProps['className'];
	loaderClassName?: string;
}

interface CheckboxSelectProps {
	title: string;
	value: SelectValue;
	options: SelectOption[];
	multiple?: boolean;
	searchable?: boolean;
	classNames?: CheckboxSelectClassNames;
	onChange: (value: SelectValue) => void;
	isLoading?: boolean;
	variant?: SelectVariants;
}

export const CheckboxSelect = forwardRef<HTMLDivElement, CheckboxSelectProps>(
	(
		{
			title,
			value,
			options,
			multiple = false,
			searchable = false,
			classNames,
			onChange,
			variant = 'gray',
			isLoading,
		},
		ref,
	) => {
		const [inited, setInited] = useState<boolean>(false);
		const [isPopoverOpened, setPopoverOpened] = useState<boolean>(false);
		const [searchValue, setSearchValue] = useState<string>('');
		const [localValue, setLocalValue] = useState<string[]>(
			multiple ? (value as string[]) : [value as string],
		);
		const [filtredOptions, setFiltredOptions] = useState<SelectOption[]>(options);
		const internalRef = useRef<HTMLDivElement>(null);

		const onSelectHandle = (value: string) => {
			setLocalValue((curr) => {
				if (!multiple) {
					return value === curr[0] ? [''] : [value];
				}
				const copy = [...curr];
				const exist = copy.findIndex((v) => v === value);
				exist != -1 ? copy.splice(exist, 1) : copy.push(value);
				return copy;
			});
		};

		useOutsideClick(() => {
			if (isPopoverOpened) {
				setPopoverOpened(false);
				onChange(multiple ? localValue : localValue[0]);
			}
		}, [internalRef]);

		const currentTitle = useMemo(() => {
			if (!multiple && localValue[0].length > 0) {
				return options.find((o) => o.value === localValue[0])!.label;
			}
			if (!!multiple && localValue.length > 0) {
				return options
					.filter((o) => localValue.includes(o.value))
					.map((o) => o.label)
					.join(', ');
			}
			return title;
		}, [localValue]);

		useEffect(() => {
			if (inited) {
				setFiltredOptions(
					options.filter((option) =>
						option.label.toLowerCase().includes(searchValue.toLowerCase()),
					),
				);
			}
		}, [options, searchValue]);

		useEffect(() => {
			if (inited) {
				setLocalValue(multiple ? (value as string[]) : [value as string]);
			}
		}, [value]);

		useEffect(() => {
			setInited(true);
		}, []);

		return (
			<div
				ref={(node) => {
					internalRef.current = node;
					if (typeof ref === 'function') {
						ref(node);
					} else if (ref) {
						ref.current = node;
					}
				}}
				className={twMerge('relative w-[340px]', classNames?.wrapperClassName)}
			>
				<CheckboxSelectButton
					title={currentTitle}
					className={classNames?.buttonClassName}
					onClick={() => {
						const curr = !isPopoverOpened;
						setPopoverOpened(curr);
						if (!curr) {
							onChange(multiple ? localValue : localValue[0]);
						}
					}}
					variant={variant}
				/>
				<CheckboxSelectPopover
					variant={variant}
					classNames={classNames?.popoverClassNames}
					options={filtredOptions}
					searchValue={searchValue}
					searchable={searchable}
					value={localValue}
					onSelect={onSelectHandle}
					isOpen={isPopoverOpened}
					onSearchValueChange={setSearchValue}
				/>
			</div>
		);
	},
);
