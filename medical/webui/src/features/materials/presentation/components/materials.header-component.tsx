import { Button, Input, LoadingProccessBar, ScreenTitle } from '@core';
import { PlusIcon, SearchIcon } from '@core/presentation/components/icons';
import { useAppNavigate } from '@core/utils';

interface PatientsHeaderProps {
	isLoading?: boolean;
}

export const MaterialsHeader = ({ isLoading }: PatientsHeaderProps) => {
	const navigate = useAppNavigate();

	return (
		<div className="flex w-full flex-col gap-2">
			<div className="flex h-[50px] w-full items-center gap-[180px]">
				<ScreenTitle title="Материалы" />
				<div className="f-full flex w-fit items-center gap-[22px]">
					<Input
						placeholder="Поиск"
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
					<Button
						onClick={() => navigate('', { add: 'true' })}
						className="px-[28px] py-[10px]"
					>
						<PlusIcon />
						<p>Материал</p>
					</Button>
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
