import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Label = ({ children, className, ...rest }: ComponentPropsWithoutRef<'label'>) => {
	return (
		<label {...rest} className={twMerge('text-[14px] leading-[1.358] text-primary', className)}>
			{children}
		</label>
	);
};
