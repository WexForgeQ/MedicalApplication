import { Button } from '@core';
import { PlusIcon } from '@core/presentation/components/icons';
import { useAppNavigate } from '@core/utils';

export const SlotCardEmpty = () => {
	const navigate = useAppNavigate();

	return (
		<div className="flex size-full flex-col items-center justify-center gap-[50px]">
			<div className="flex w-full flex-col items-center justify-center gap-[10px]">
				<p className="text-[20px] font-semibold text-primaryDark">
					Просмотр информации о слотах
				</p>
				<p className="text-[18px] font-semibold text-textGray">выберите из списка</p>
			</div>
			<Button onClick={() => navigate('', { add: 'true' })} className="px-[28px] py-[10px]">
				<PlusIcon />
				<p>Слот</p>
			</Button>
		</div>
	);
};
