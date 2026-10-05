import { mainSliderConfig } from '@features/main/constants';
import { MainSliderListItem } from './main-slider-list-item.component';

interface MainSliderListProps {
	currentIndex: number;
}

export const MainSliderList = ({ currentIndex }: MainSliderListProps) => {
	return (
		<div className="w-[1180px] overflow-x-hidden">
			<div
				className="flex flex-nowrap gap-[50px] transition-transform duration-300 ease-in-out"
				style={{
					transform: `translateX(-${currentIndex * 1230}px)`,
					willChange: 'transform',
				}}
			>
				{mainSliderConfig.map((slide) => (
					<MainSliderListItem key={slide.bgImgSrc} {...slide} />
				))}
			</div>
		</div>
	);
};
