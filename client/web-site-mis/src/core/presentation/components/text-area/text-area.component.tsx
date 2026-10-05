import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: boolean;
	autoHeight?: boolean;
	minHeight?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ error, autoHeight = true, minHeight = '129px', ...props }, ref) => {
		const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
			const target = e.target as HTMLTextAreaElement;
			if (autoHeight) {
				target.style.height = 'auto';
				target.style.height = `${target.scrollHeight}px`;
			}
			props.onInput?.(e);
		};

		const handleRef = (element: HTMLTextAreaElement) => {
			if (element && autoHeight && props.value) {
				setTimeout(() => {
					element.style.height = 'auto';
					element.style.height = `${element.scrollHeight}px`;
				}, 0);
			}

			if (typeof ref === 'function') {
				ref(element);
			} else if (ref) {
				ref.current = element;
			}
		};

		return (
			<textarea
				{...props}
				ref={handleRef}
				onInput={handleInput}
				style={{
					...props.style,
					resize: autoHeight ? 'none' : props.style?.resize,
					overflow: 'hidden',
					minHeight,
				}}
				disabled={props.disabled}
				aria-disabled={error ? 'true' : 'false'}
				className={twMerge(
					'w-full items-center rounded-[12px] border-[1px] border-[#0000001F] bg-white px-[14px] py-[15px] text-[20px] font-medium leading-normal text-[#333333] outline-none placeholder:text-[20px] placeholder:font-medium placeholder:leading-normal placeholder:text-[#6B6B6B] focus:border-primary disabled:opacity-90',
					error && 'border-error',
					props.className,
				)}
			/>
		);
	},
);
