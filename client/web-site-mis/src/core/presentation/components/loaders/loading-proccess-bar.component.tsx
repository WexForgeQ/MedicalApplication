import { twMerge } from 'tailwind-merge';

export interface LoadingProccessBarProps {
	bgClassName?: string;
	trackClassName?: string;
}

export const LoadingProccessBar = ({ bgClassName, trackClassName }: LoadingProccessBarProps) => {
	return (
		<div
			className={twMerge(
				'relative block h-[4px] w-[250px] overflow-hidden rounded-[10px] bg-[#F6F5FA]',
				bgClassName,
			)}
		>
			<div
				className={twMerge(
					'absolute top-0 h-full w-full animate-loaderProcessBar bg-primary',
					trackClassName,
				)}
			></div>
		</div>
	);
};
