import { CrossIcon } from '@core';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export interface MainQuestionProps {
	question: string;
	answer: string;
}

export const MainQuestion = ({ question, answer }: MainQuestionProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div
			className={twMerge(
				'flex min-h-[90px] w-[780px] items-center rounded-[30px] bg-[#F6F7F9] pl-[25px] pr-[16px]',
				isOpen ? 'relative' : 'flex-row items-center justify-between',
			)}
		>
			{!isOpen ? (
				<>
					<p className="w-[660px] text-[24px] font-semibold leading-normal text-primary">
						{question}
					</p>
					<button
						className="flex size-[50px] items-center justify-center rounded-full border-none bg-primary2 text-[32px] font-bold leading-normal text-white outline-none hover:bg-primary2/90"
						onClick={() => setIsOpen(true)}
					>
						+
					</button>
				</>
			) : (
				<>
					<div className="flex w-[675px] flex-col gap-[27px] pb-[25px] pt-[29px]">
						<p className="text-[24px] font-semibold leading-tight text-primary">
							{question}
						</p>
						<p className="text-[22px] font-medium leading-[1.36364] text-text">
							{answer}
						</p>
					</div>
					<button
						className="absolute right-[21px] top-[20px] border-none text-primary2 outline-none hover:text-primary2/90"
						onClick={() => setIsOpen(false)}
					>
						<CrossIcon className="size-[40px]" />
					</button>
				</>
			)}
		</div>
	);
};
