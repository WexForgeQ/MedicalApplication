import { MainSectionTitle } from '../main-section-title.component';
import { MainSection } from '../main-section.component';
import { MainAboutUsContent } from './main-about-us-content.component';

export const MainAboutUs = () => {
	return (
		<MainSection sectionClassName="bg-white" contentWrapperClassName="flex-col gap-[38px]">
			<MainSectionTitle title="О нас" />
			<MainAboutUsContent />
		</MainSection>
	);
};
