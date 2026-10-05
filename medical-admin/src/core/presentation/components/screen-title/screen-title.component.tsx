interface ScreenTitleProps {
	title: string;
}

export const ScreenTitle = ({ title }: ScreenTitleProps) => {
	return <p className="text-[24px] font-bold text-primary">{title}</p>;
};
