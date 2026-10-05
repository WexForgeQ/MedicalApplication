import { Modal } from '@core';
import type { ModalWrapperProps } from '@core/types';
import type { MainScreenModals } from '@features/main/types';
import { useState } from 'react';
import { MainQuestionModalForm } from './main-question-form.modal';
import { MainQuestionModalResult } from './main-question-result.modal';

export default ({ close }: ModalWrapperProps<MainScreenModals['QUESTION_MODAL']>) => {
	const [isCompleted, setIsComplited] = useState<boolean>(false);

	const sendQuestion = () => {
		setIsComplited(true);
	};

	return (
		<Modal close={isCompleted ? undefined : close} wrapperClassName="w-[1180px]">
			{!isCompleted ? (
				<MainQuestionModalForm sendForm={sendQuestion} />
			) : (
				<MainQuestionModalResult close={close} />
			)}
		</Modal>
	);
};
