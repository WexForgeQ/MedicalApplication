import { mainSliderConfig } from '@features/main/constants';
import { useEffect, useRef, useState } from 'react';
import { MainSliderBar } from './main-slider-bar.component';
import { MainSliderList } from './main-slider-list.component';

export const MainSlider = () => {
	const sliderIntervalRef = useRef<NodeJS.Timeout | null>(null);
	const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

	const clearSliderInterval = () => {
		if (sliderIntervalRef.current) {
			clearInterval(sliderIntervalRef.current);
			sliderIntervalRef.current = null;
		}
	};

	useEffect(() => {
		clearSliderInterval();
		sliderIntervalRef.current = setInterval(() => {
			setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % mainSliderConfig.length);
		}, 5000);
		return () => {
			clearSliderInterval();
		};
	}, [currentSlideIndex]);

	return (
		<section className="flex w-full justify-center bg-white pb-[105px]">
			<div className="flex flex-col items-center gap-[54px]">
				<MainSliderList currentIndex={currentSlideIndex} />
				<MainSliderBar
					currentIndex={currentSlideIndex}
					onChangeIndex={setCurrentSlideIndex}
				/>
			</div>
		</section>
	);
};
