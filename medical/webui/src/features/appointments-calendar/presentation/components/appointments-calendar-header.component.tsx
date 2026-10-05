import { Input, LoadingProccessBar, ScreenTitle } from '@core';
import { SearchIcon } from '@core/presentation/components/icons';

interface AppointmentsCalendarHeaderProps {
	isLoading?: boolean;
}

export const AppointmentsCalendarHeader = ({ isLoading }: AppointmentsCalendarHeaderProps) => {
	return (
		<div className="flex w-full flex-col gap-2">
			<div className="flex h-[50px] w-full items-center gap-[400px]">
				<ScreenTitle title="Записи" />
				<div className="f-full flex w-fit items-center gap-[22px]">
					<Input
						placeholder="Поиск по ФИО врача"
						classNames={{
							inputClassName:
								'bg-white placeholder:text-primary text-[12px]  border-none',
							containerClassName:
								'w-[230px] h-[40px] focus:ring focus:ring-primary border-none',
							wrapperClassName: 'py-[12px] px-[20px]',
						}}
						iconClassName="pr-[20px] text-primary"
						Icon={SearchIcon}
					/>
					<Input
						placeholder="Поиск по специализации"
						classNames={{
							inputClassName:
								'bg-white placeholder:text-primary text-[12px]  border-none',
							containerClassName:
								'w-[230px] h-[40px] focus:ring focus:ring-primary border-none',
							wrapperClassName: 'py-[12px] px-[20px]',
						}}
						iconClassName="pr-[20px] text-primary"
						Icon={SearchIcon}
					/>
				</div>
			</div>
			{isLoading && (
				<div className="flex items-center justify-center">
					<LoadingProccessBar bgClassName="w-full max-w-[500px]" />
				</div>
			)}
		</div>
	);
};
