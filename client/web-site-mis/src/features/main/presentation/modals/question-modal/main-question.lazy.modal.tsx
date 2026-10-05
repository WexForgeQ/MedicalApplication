import { mainWithLazyModal } from '@features/main/contexts';

export const MainQuestionModal = mainWithLazyModal(
	'QUESTION_MODAL',
	() => import('./main-question.modal'),
);
