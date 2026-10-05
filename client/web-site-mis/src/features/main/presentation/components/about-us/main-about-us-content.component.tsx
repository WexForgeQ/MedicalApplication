import { AppLogoIcon } from '@core';
import { MainAboutUsContentCheckBlock } from './main-about-us-content-check-block.component';
import { MainAboutUsContentCheckItem } from './main-about-us-content-check-item.component';

export const MainAboutUsContent = () => {
	return (
		<div className="flex w-full flex-row gap-[85px] rounded-[30px] bg-[#F6F7F9] pb-[77px] pl-[50px] pt-[50px]">
			<div className="flex w-[704px] flex-col">
				<p className="mb-[25px] text-[40px] font-semibold leading-normal text-primary">
					Dev Med — это новая ступень в заботе о здоровье
				</p>
				<p className="mb-[51px] text-[20px] font-semibold leading-normal text-text">
					Мы объединили экспертизу лучших врачей, современные медицинские технологии и
					персонализированный сервис, чтобы предложить вам медицину, которой можно
					доверять
				</p>
				<div className="flex w-full justify-between">
					<MainAboutUsContentCheckBlock>
						<MainAboutUsContentCheckItem text="Команда экспертов" />
						<MainAboutUsContentCheckItem text="Диагностика высшего уровня" />
						<MainAboutUsContentCheckItem text="Полный цикл заботы" />
					</MainAboutUsContentCheckBlock>
					<MainAboutUsContentCheckBlock>
						<MainAboutUsContentCheckItem text="Комфорт и забота" />
						<MainAboutUsContentCheckItem text="Прозрачность и открытость" />
						<MainAboutUsContentCheckItem text="Индивидуальные программы" />
					</MainAboutUsContentCheckBlock>
				</div>
			</div>
			<div className="flex h-full items-center">
				<div className="flex flex-col items-center gap-[10px]">
					<AppLogoIcon className="size-[188px] text-primary" />
					<p className="text-[60px] font-semibold leading-normal text-primary">DevMed</p>
				</div>
			</div>
		</div>
	);
};
