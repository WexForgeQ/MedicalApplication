import { FeedbackStart } from '@core';
import type { Feedback } from '@features/main/types';
import { twMerge } from 'tailwind-merge';

interface MainFeedbacksListItemProps {
	feedback?: Feedback;
	isLoading?: boolean;
}

export const MainFeedbacksListItem = ({ feedback, isLoading }: MainFeedbacksListItemProps) => {
	return (
		<div
			className={twMerge(
				'flex h-[340px] w-[780px] flex-shrink-0 flex-col gap-[25px] rounded-[30px] bg-[#F6F7F9] py-[35px] pl-[30px] pr-[20px]',
				isLoading && 'animate-pulse',
			)}
		>
			{!!feedback && (
				<>
					<div className="flex w-full justify-between">
						<div className="flex flex-row items-center gap-[22px]">
							<div className="size-[70px] rounded-full border-none bg-white">
								{feedback.user.photoUrl.length > 0 && (
									<img
										src={feedback.user.photoUrl}
										className="size-full rounded-full object-cover"
									/>
								)}
							</div>
							<div className="flex flex-col gap-[10px]">
								<p className="text-[20px] font-semibold leading-[1.1] text-text">
									{feedback.user.name}
								</p>
								<div className="flex flex-row gap-[5px]">
									{Array.from({ length: 5 }).map((_, index) => (
										<FeedbackStart
											key={index}
											className={
												index <= feedback.stars - 1
													? 'text-[#E09F1F]'
													: 'text-textGray'
											}
										/>
									))}
								</div>
							</div>
						</div>
						<p className="mt-[9px] text-[16px] font-medium leading-snug text-primary2">
							{feedback.date}
						</p>
					</div>
					<p className="text-[18px] font-medium leading-[1.38889] text-text">
						{feedback.description}
					</p>
				</>
			)}
		</div>
	);
};
