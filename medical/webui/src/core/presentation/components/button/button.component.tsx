import type { AppIconProps } from '@core/types/icons.types';
import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { LoadingProccessBar, type LoadingProccessBarProps } from '../loaders';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	isLoading?: boolean;
	loaderProps?: LoadingProccessBarProps;
	Icon?: (props: AppIconProps) => React.JSX.Element;
}

export const Button = ({
	children,
	className,
	isLoading,
	loaderProps,
	Icon,
	...rest
}: ButtonProps) => {
	return (
		<button
			disabled={rest.disabled || isLoading}
			className={twMerge(
				'flex h-[42px] flex-row items-center justify-center gap-[10px] rounded-primary border-none text-[16px] text-white enabled:bg-primary enabled:hover:bg-primary/90 disabled:bg-textGray',
				className,
			)}
			{...rest}
		>
			{isLoading ? (
				<LoadingProccessBar
					bgClassName="bg-textGray"
					trackClassName="bg-white"
					{...loaderProps}
				/>
			) : (
				<>
					{!!Icon && <Icon />}
					{children}
				</>
			)}
		</button>
	);
};
