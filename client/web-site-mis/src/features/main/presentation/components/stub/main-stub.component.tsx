import { APP_ROUTES } from '@core/constants';
import { HOME_ROUTES } from '@features/home/constants';
import { stubSrc } from '@features/main/assets';
import { NavLink } from 'react-router-dom';
import { MainSection } from '../main-section.component';

export const MainStubComponent = () => {
	return (
		<MainSection
			sectionClassName="bg-white"
			contentWrapperClassName="h-[281px] flex-row gap-[30px]"
		>
			<img
				className="h-full w-[400px] rounded-[30px] object-cover"
				src={stubSrc}
				alt="Заглушка"
			/>
			<div className="flex flex-1 flex-col rounded-[30px] bg-[linear-gradient(270deg,#6EA4BD_0%,#B3D0DE_100%)] px-[29px] pt-[30px]">
				<p className="mb-[10px] text-[30px] font-semibold leading-normal text-white">
					Ультразвуковое исследование
				</p>
				<p className="mb-[40px] text-[18px] font-medium leading-normal text-white">
					Исследование дает детальную картину состояния органов. Высокое разрешение
					позволяет выявлять даже минимальные изменения, что критически важно для ранней
					диагностики и профилактики заболеваний
				</p>
				<NavLink
					to={`${APP_ROUTES.home.path}${HOME_ROUTES.appointment.path}`}
					className="flex h-[52px] w-fit items-center rounded-[30px] bg-white px-[35px] text-[20px] text-primary2 hover:bg-white/80"
				>
					Запись онлайн
				</NavLink>
			</div>
		</MainSection>
	);
};
