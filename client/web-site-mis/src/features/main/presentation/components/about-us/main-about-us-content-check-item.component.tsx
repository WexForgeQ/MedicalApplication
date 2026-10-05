import { CheckIcon } from '@core';

interface MainAboutUsContentCheckItemProps {
	text: React.ReactNode;
}

export const MainAboutUsContentCheckItem = ({ text }: MainAboutUsContentCheckItemProps) => {
	return (
		<div className="flex flex-row items-center gap-[10px] text-primary">
			<CheckIcon className="size-[25px]" />
			<p className="text-[20px] font-semibold leading-normal">{text}</p>
		</div>
	);
};
