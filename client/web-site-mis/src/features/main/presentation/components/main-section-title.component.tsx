export interface MainSectionTitleProps {
	title: string;
}

export const MainSectionTitle = ({ title }: MainSectionTitleProps) => {
	return <p className="text-[24px] font-semibold leading-normal text-text">{title}</p>;
};
