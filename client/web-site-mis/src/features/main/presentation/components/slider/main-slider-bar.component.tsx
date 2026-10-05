import { mainSliderConfig } from '@features/main/constants';
import { twMerge } from 'tailwind-merge';

interface MainSliderBarProps {
	onChangeIndex: (index: number) => void;
	currentIndex: number;
}

export const MainSliderBar = ({ onChangeIndex, currentIndex }: MainSliderBarProps) => {
	return (
		<div className="flex flex-row gap-[15px]">
			{mainSliderConfig.map((item, index) => (
				<div
					key={item.bgImgSrc}
					className={twMerge(
						'h-[20px] transition-all duration-300',
						index === currentIndex
							? 'w-[40px] rounded-[20px] bg-primary'
							: 'w-[20px] cursor-pointer rounded-[5px] bg-noActive',
					)}
					onClick={() => onChangeIndex(index)}
				></div>
			))}
		</div>
	);
};
