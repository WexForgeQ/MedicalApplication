import type { Feedback } from '@features/main/types';
import { useEffect, useRef, useState } from 'react';
import { MainFeedbacksListBar } from './main-feedbacks-list-bar.component';
import { MainFeedbacksListItem } from './main-feedbacks-list-item.component';

interface MainFeedbacksListProps {
	feedbacks: Feedback[];
	isLoading: boolean;
}

export const MainFeedbacksList = ({ feedbacks, isLoading }: MainFeedbacksListProps) => {
	const feedbacksSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const clearSliderInterval = () => {
		if (feedbacksSlideIntervalRef.current) {
			clearInterval(feedbacksSlideIntervalRef.current);
			feedbacksSlideIntervalRef.current = null;
		}
	};

	useEffect(() => {
		clearSliderInterval();
		feedbacksSlideIntervalRef.current = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
		}, 5000);
		return () => {
			clearSliderInterval();
		};
	}, [currentIndex]);

	return (
		<div className="flex flex-col items-center gap-[27px]">
			{isLoading ? (
				<MainFeedbacksListItem isLoading={true} />
			) : (
				<div className="w-[780px] overflow-x-hidden">
					<div
						className="flex flex-nowrap transition-transform duration-300 ease-in-out"
						style={{
							transform: `translateX(-${currentIndex * 780}px)`,
							willChange: 'transform',
						}}
					>
						{feedbacks.map((feedback) => (
							<MainFeedbacksListItem key={feedback.id} feedback={feedback} />
						))}
					</div>
				</div>
			)}
			<MainFeedbacksListBar
				feedbacks={feedbacks}
				currentIndex={currentIndex}
				isLoading={isLoading}
				onChangeIndex={setCurrentIndex}
			/>
		</div>
	);
};
