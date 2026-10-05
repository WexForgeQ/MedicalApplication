import { mainQuestionsConfig } from '@features/main/constants';
import { MainSectionTitle } from '../main-section-title.component';
import { MainSection } from '../main-section.component';
import { MainAskQuestion } from './main-ask-question.component';
import { MainQuestion } from './main-question.component';

export const MainQuestions = () => {
	return (
		<MainSection contentWrapperClassName="flex-col gap-[30px]" sectionClassName="bg-white">
			<MainSectionTitle title="Частые вопросы" />
			<div className="flex flex-row items-start justify-between">
				<div className="flex flex-col gap-[20px]">
					{mainQuestionsConfig.map((q) => (
						<MainQuestion key={q.question} {...q} />
					))}
				</div>
				<MainAskQuestion />
			</div>
		</MainSection>
	);
};
