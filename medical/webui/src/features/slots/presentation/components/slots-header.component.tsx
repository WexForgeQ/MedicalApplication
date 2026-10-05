import { Button, Input, ScreenTitle } from '@core';
import { PlusIcon, SearchIcon } from '@core/presentation/components/icons';

interface Props {
	onAddClick?: () => void;
	isLoading?: boolean;
}

export const SlotsHeader = ({ onAddClick, isLoading }: Props) => {
	return (
		<div className="flex h-[50px] w-full items-center gap-[180px]">
			<ScreenTitle title="Слоты" />
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
				<Button className="px-[28px] py-[10px]" onClick={onAddClick} disabled={isLoading}>
					<PlusIcon />
					<p>Добавить слот</p>
				</Button>
			</div>
		</div>
	);
};
