import { twMerge } from 'tailwind-merge';

interface MainSectionProps {
	children: React.ReactNode;
	sectionClassName?: string;
	contentWrapperClassName?: string;
}

export const MainSection = ({
	children,
	sectionClassName,
	contentWrapperClassName,
}: MainSectionProps) => {
	return (
		<section className={twMerge('flex w-full justify-center py-[60px]', sectionClassName)}>
			<div className={twMerge('flex w-[1180px]', contentWrapperClassName)}>{children}</div>
		</section>
	);
};
