import { Button, Input, ScreenTitle } from '@core';
import { APP_ROUTES } from '@core/constants';
import { SearchIcon } from '@core/presentation/components/icons';
import { useAppNavigate } from '@core/utils';
import { HOME_ROUTES } from '@features/home/constants';
import { Link, useSearchParams } from 'react-router-dom';

interface Props {
	isLoading?: boolean;
}

export const SlotsMainHeader = ({ isLoading }: Props) => {
	const navigate = useAppNavigate();
	const [search] = useSearchParams();
	return (
		<div className="flex h-[50px] w-full items-center gap-[180px]">
			<ScreenTitle title="Все записи" />
			<div className="f-full flex w-fit items-center gap-[22px]">
				<Input
					id="date"
					type="date"
					placeholder="ДД:ММ:ГГ"
					value={search.get('day') || ''}
					classNames={{
						inputClassName: 'w-full h-[40px] text-center',
						wrapperClassName: 'w-full',

						containerClassName: 'bg-[#FAFAFB] border-none text-primary h-[40px]',
					}}
					onChange={(e) => navigate('', { day: e.target.value })}
				/>
				<Input
					placeholder="Поиск по ФИО врача"
					classNames={{
						inputClassName:
							'bg-white placeholder:text-primary text-[12px]  border-none',
						containerClassName:
							'w-[230px] h-[40px] focus:ring focus:ring-primary border-none',
						wrapperClassName: ' py-[12px] px-[20px]',
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
				<Link to={APP_ROUTES.home.path + HOME_ROUTES.appointmentsCalendar.path}>
					<Button className="px-[28px] py-[10px]" disabled={isLoading}>
						<p>Таблица</p>
					</Button>
				</Link>
			</div>
		</div>
	);
};
