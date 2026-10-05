import { Button } from '@core';
import { servicesListConfig } from '@features/services/constants';
import { useState } from 'react';
import { MainSectionTitle } from '../main-section-title.component';
import { MainSection } from '../main-section.component';
import { MainServicesList } from './main-services-list.component';

export const MainServices = () => {
	const [openedNumber, setOpenedNumber] = useState<number>(8);

	return (
		<MainSection sectionClassName="bg-[#F6F5FA]" contentWrapperClassName="flex-col  gap-[34px]">
			<MainSectionTitle title="Популярные услуги" />
			<div className="flex w-full flex-col">
				<MainServicesList openedNumber={openedNumber} />
				{openedNumber < servicesListConfig.length && (
					<Button
						variant="white"
						className="mt-[50px] self-center"
						onClick={() => setOpenedNumber((curr) => curr + 8)}
					>
						Показать больше
					</Button>
				)}
			</div>
		</MainSection>
	);
};
