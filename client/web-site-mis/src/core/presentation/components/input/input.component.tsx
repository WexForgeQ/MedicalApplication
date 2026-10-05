import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, ...props }, ref) => {
	return (
		<input
			{...props}
			ref={ref}
			disabled={props.disabled}
			aria-disabled={error ? 'true' : 'false'}
			className={twMerge(
				'h-[54px] w-full items-center rounded-[12px] border-[1px] border-[#0000001F] bg-white pl-[20px] pr-[46px] text-[20px] font-medium leading-normal text-[#333333] outline-none placeholder:text-[20px] placeholder:font-medium placeholder:leading-normal placeholder:text-[#6B6B6B] focus:border-primary disabled:opacity-90',
				error && 'border-error',
				props.className,
			)}
		/>
	);
});
