import { useAppNavigate } from '@core/utils';
import { HOME_ROUTES } from '@features/home/constants';
import { Button } from '../button';
import { PlusIcon } from '../icons';

export const HumanEntityCardEmpty = () => {
	const navigate = useAppNavigate();

	return (
		<div className="flex size-full flex-col items-center justify-center gap-[50px]">
			<div className="flex w-full flex-col items-center justify-center gap-[10px]">
				<p className="text-[20px] font-semibold text-primaryDark">
					Просмотр информации о{' '}
					{location.pathname.includes(HOME_ROUTES.personal.path)
						? 'сотруднике'
						: 'пациенте'}
				</p>
				<p className="text-[18px] font-semibold text-textGray">выберите из списка</p>
			</div>
			<Button onClick={() => navigate('', { add: 'true' })} className="px-[28px] py-[10px]">
				<PlusIcon />
				<p>
					{location.pathname.includes(HOME_ROUTES.personal.path)
						? 'Cотрудника'
						: 'Пациента'}
				</p>
			</Button>
		</div>
	);
};
