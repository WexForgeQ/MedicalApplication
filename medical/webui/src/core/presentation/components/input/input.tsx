import { type ComponentPropsWithRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Label } from '../label';

interface InputClassNames {
	inputClassName?: string;
	labelClassName?: string;
	wrapperClassName?: string;
	containerClassName?: string;
	errorClassName?: string;
}

export interface InputProps extends ComponentPropsWithRef<'input'> {
	label?: string;
	classNames?: InputClassNames;
	iconClassName?: string;
	errorMessage?: string;
	Icon?: React.ElementType;
	onIconClick?: () => void;
	iconPos?: 'right' | 'left';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label,
			classNames,
			errorMessage,
			Icon,
			onIconClick,
			iconClassName,
			iconPos = 'right',
			...rest
		},
		ref,
	) => {
		return (
			<div className={twMerge('flex flex-col gap-y-2', classNames?.wrapperClassName)}>
				{!!label && (
					<Label
						className={twMerge(
							classNames?.labelClassName,
							rest.disabled && 'opacity-80',
						)}
						htmlFor={rest.id}
					>
						{label}
					</Label>
				)}

				<div
					className={twMerge(
						'relative flex h-[50px] w-full items-center justify-center rounded-primary border-[2px] border-[#F5F5F5] bg-white px-[20px] focus-within:ring-2 focus-within:ring-primary',
						classNames?.containerClassName,
					)}
				>
					<input
						ref={ref}
						{...rest}
						className={twMerge(
							'flex-1 bg-transparent text-[20px] text-primary outline-none placeholder:text-[12px] placeholder:text-textGray disabled:opacity-80',
							classNames?.inputClassName,
						)}
					/>

					{Icon && (
						<Icon
							className={twMerge(
								'text-gray h-5 w-5 cursor-pointer transition-colors',
								iconClassName,
							)}
							onClick={onIconClick}
						/>
					)}
				</div>

				{!!errorMessage && (
					<p className={twMerge('text-[14px] text-error', classNames?.errorClassName)}>
						{errorMessage}
					</p>
				)}
			</div>
		);
	},
);
