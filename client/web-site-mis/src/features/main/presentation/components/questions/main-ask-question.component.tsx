import { Button } from '@core';
import { useMainModalManager } from '@features/main/contexts';

export const MainAskQuestion = () => {
	const { open } = useMainModalManager();

	return (
		<div className="flex h-[244px] w-[380px] flex-col items-center rounded-[30px] bg-primary2">
			<p className="mt-[35px] text-[28px] font-bold leading-[0.78571] text-white">
				Остались вопросы?
			</p>
			<p className="mb-[30px] mt-[25px] w-[366px] text-center text-[20px] font-medium leading-[1.1] text-white">
				Спросите нас и получите быстрый ответ
			</p>
			<Button variant="white" onClick={() => open('QUESTION_MODAL')}>
				Задать вопрос
			</Button>
		</div>
	);
};
