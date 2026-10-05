import { Button, Checkbox, Input, TextArea } from '@core';
import { MainQuestionFormConfig, type MainQuestionFormSchemeType } from '@features/main/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface MainQuestionModalFormProps {
	sendForm: (data: MainQuestionFormSchemeType) => void;
}

export const MainQuestionModalForm = ({ sendForm }: MainQuestionModalFormProps) => {
	const [isAgree, setIsAgreee] = useState<boolean>(false);
	const form = useForm<MainQuestionFormSchemeType>({
		defaultValues: MainQuestionFormConfig.defaultValues,
		resolver: zodResolver(MainQuestionFormConfig.schema),
	});

	const { setValue, formState, register } = form;

	const onSubmit = () => {
		form.handleSubmit(sendForm)();
	};

	return (
		<div className="flex w-full justify-between pb-[30px] pl-[61px] pr-[81px] pt-[7px]">
			<div className="flex w-[346px] flex-col gap-[60px] pt-[29px]">
				<p className="text-[30px] font-semibold leading-[1.33333] text-text">
					Задайте вопрос
				</p>
				<p className="text-[18px] leading-normal text-text">
					Остались вопросы? Спросите нас. Ответим по почте в течение рабочего дня.
				</p>
			</div>
			<div className="flex w-[611px] flex-col gap-[25px]">
				<div className="flex flex-col gap-[21px]">
					<Input
						{...register('name')}
						placeholder="Имя"
						error={!!formState.errors.name?.message}
					/>
					<div className="flex flex-row gap-[21px]">
						<Input
							{...register('email')}
							placeholder="Имя"
							error={!!formState.errors.email?.message}
							type="email"
							className="w-[296px]"
						/>
					</div>
					<TextArea
						{...register('question')}
						placeholder="Ваш вопрос"
						error={!!formState.errors.question?.message}
					/>
				</div>
				<div className="flex flex-row gap-[12px]">
					<Checkbox
						id="agree-id"
						value={isAgree}
						onChange={setIsAgreee}
						className="size-[16px] rounded-[4px] border-2 border-text"
						checkedClassName="bg-text"
						iconClassName="h-[8px] w-[7px]"
					/>
					<label
						htmlFor="agree-id"
						className="select-none text-[16px] leading-none text-text"
					>
						Даю согласие на обработку персональных данных
					</label>
				</div>
				<Button
					className="h-[60px] w-[280px] items-center justify-center self-center px-0 py-0"
					onClick={onSubmit}
					disabled={!isAgree}
				>
					Задать вопрос
				</Button>
			</div>
		</div>
	);
};
