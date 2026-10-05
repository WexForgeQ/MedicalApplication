import { AppLogoIcon } from '@core/presentation/components/icons';
import { twMerge } from 'tailwind-merge';

interface SidebarTitleProps {
	isSidebarOpen: boolean;
	onClick: () => void;
}

export const SidebarTitle = ({ isSidebarOpen, onClick }: SidebarTitleProps) => {
	return (
		<div
			className={twMerge(
				'flex w-full cursor-pointer items-center',
				isSidebarOpen ? 'flex-row gap-[19px]' : 'flex-col gap-[10px]',
			)}
			onClick={onClick}
		>
			<AppLogoIcon className="size-[38px]" />
			<p
				className={twMerge(
					'font-semibold leading-none text-primary',
					isSidebarOpen ? 'text-[24px]' : 'text-[13px]',
				)}
			>
				DevMed
			</p>
		</div>
	);
};
