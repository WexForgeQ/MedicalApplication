import { Button } from '@core';
import { mainFakeFeedbacks } from '@features/main/constants';
import { MainSectionTitle } from '../main-section-title.component';
import { MainSection } from '../main-section.component';
import { MainFeedbacksList } from './main-feedbacks-list.component';

export const MainFeedbacks = () => {
	return (
		<MainSection contentWrapperClassName="flex-col gap-[23px]" sectionClassName="bg-white">
			<MainSectionTitle title="Отзывы" />
			<div className="flex w-full flex-row justify-between">
				<div className="mt-[7px] flex w-[350px] flex-col">
					<p className="text-[40px] font-semibold leading-normal text-primary">
						Честные мнения о нашей клинике
					</p>
					<p className="mb-[50px] mt-[33px] w-[326px] text-center text-[18px] font-medium leading-[1.22222] text-text">
						Мы ценим ваше доверие и тщательно анализируем каждый отзыв, чтобы
						становиться лучше
					</p>
					<Button className="self-center" variant="primary2">
						Оставить отзыв
					</Button>
				</div>
				<MainFeedbacksList feedbacks={mainFakeFeedbacks} isLoading={false} />
			</div>
		</MainSection>
	);
};
