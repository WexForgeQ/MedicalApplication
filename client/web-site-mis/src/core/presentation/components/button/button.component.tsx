import type { AppIconProps } from '@core/types';
import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Variants = 'primary' | 'white' | 'primary2';

const classNameByVariant: Record<Variants, string> = {
	primary: 'text-white enabled:bg-primary enabled:hover:bg-primary/90 disabled:bg-textGray',
	white: 'text-primary enabled:bg-white enabled:hover:bg-white/80 disabled:bg-textGray disabled:text-white',
	primary2: 'text-white enabled:bg-primary2 enabled:hover:bg-primary2/90 disabled:bg-textGray',
};

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	Icon?: (props: AppIconProps) => React.JSX.Element;
	variant?: Variants;
}

export const Button = ({
	children,
	className,
	Icon,
	variant = 'primary',
	...rest
}: ButtonProps) => {
	return (
		<button
			disabled={rest.disabled}
			className={twMerge(
				'flex h-[52px] w-fit flex-row items-center justify-center gap-[10px] rounded-[30px] border-none px-[35px] text-[20px] font-medium leading-[1.1]',
				classNameByVariant[variant],
				className,
			)}
			{...rest}
		>
			{!!Icon && <Icon />}
			{children}
		</button>
	);
};
