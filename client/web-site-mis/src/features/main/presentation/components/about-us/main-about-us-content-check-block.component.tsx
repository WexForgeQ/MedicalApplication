interface MainAboutUsContentCheckBlockProps {
	children: React.ReactNode;
}

export const MainAboutUsContentCheckBlock = ({ children }: MainAboutUsContentCheckBlockProps) => {
	return <div className="flex flex-col gap-[30px]">{children}</div>;
};
