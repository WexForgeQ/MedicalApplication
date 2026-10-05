import { Button } from '@core';

interface MainQuestionModalResultProps {
	close: () => void;
}

export const MainQuestionModalResult = ({ close }: MainQuestionModalResultProps) => {
	return (
		<div className="flex w-full flex-col items-center gap-[59px] py-[93px] pb-[46px]">
			<div className="flex flex-col items-center gap-[18px]">
				<p className="text-[30px] font-semibold leading-[1.13333] text-text">
					Спасибо за вопрос
				</p>
				<p className="text-[30px] font-semibold leading-[1.13333] text-primary">
					Ответ поступит на указанный e-mail в течении рабочего дня
				</p>
			</div>
			<Button
				className="h-[60px] w-[280px] items-center justify-center px-0 py-0"
				onClick={close}
			>
				Закрыть
			</Button>
		</div>
	);
};
