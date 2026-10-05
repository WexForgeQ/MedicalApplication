type MainSliderItemContentPosition = 'left' | 'right';

interface MainSliderItemContentLink {
	text: string;
	to: string;
}

interface MainSliderItemContent {
	title: string;
	text: string;
	link: MainSliderItemContentLink;
}

interface MainSliderItemClassNames {}

export interface MainSliderItemProps {
	position: MainSliderItemContentPosition;
	bgImgSrc: string;
	classNames?: MainSliderItemClassNames;
	content: MainSliderItemContent;
}

export type MainSliderConfig = MainSliderItemProps[];
