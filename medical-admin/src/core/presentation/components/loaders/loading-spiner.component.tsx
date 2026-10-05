import { twMerge } from 'tailwind-merge';

interface LoadingSpinnerProps {
	className?: string;
}

export const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
	return (
		<div
			className={twMerge(
				'border-main size-10 animate-spin rounded-full border-2 border-solid border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]',
				className,
			)}
		></div>
	);
};
