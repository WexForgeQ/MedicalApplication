import type { Feedback } from '@features/main/types';
import { twMerge } from 'tailwind-merge';

interface MainFeedbacksListBarProps {
	onChangeIndex: (index: number) => void;
	currentIndex: number;
	feedbacks: Feedback[];
	isLoading: boolean;
}

export const MainFeedbacksListBar = ({
	onChangeIndex,
	currentIndex,
	feedbacks,
	isLoading,
}: MainFeedbacksListBarProps) => {
	return (
		<div
			className={twMerge(
				'flex h-[18px] flex-row gap-[15px]',
				feedbacks.length === 0 && 'w-full',
			)}
		>
			{!isLoading &&
				feedbacks.map((fb, index) => (
					<div
						key={fb.id}
						className={twMerge(
							'h-full transition-all duration-300',
							index === currentIndex
								? 'w-[36px] rounded-[20px] bg-primary'
								: 'w-[18px] cursor-pointer rounded-[5px] bg-noActive',
						)}
						onClick={() => onChangeIndex(index)}
					></div>
				))}
		</div>
	);
};
