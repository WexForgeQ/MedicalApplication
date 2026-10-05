import { HomeScreenWrapper } from '@features/home/presentation/components';
import { MainModalManagerProvider, MainModalStateProvider } from '@features/main/contexts';
import {
	MainAboutUs,
	MainDoctors,
	MainFeedbacks,
	MainQuestions,
	MainServices,
	MainSlider,
	MainStoks,
	MainStubComponent,
} from '../components';
import { MainQuestionModal } from '../modals';

export default () => {
	return (
		<HomeScreenWrapper sliceNames={['doctorsSlice', 'stocksSlice']}>
			<main className="flex w-full flex-col">
				<MainModalManagerProvider>
					<MainSlider />
					<MainServices />
					<MainAboutUs />
					<MainStubComponent />
					<MainDoctors />
					<MainFeedbacks />
					<MainStoks />
					<MainQuestions />
					<MainModalStateProvider>
						<MainQuestionModal />
					</MainModalStateProvider>
				</MainModalManagerProvider>
			</main>
		</HomeScreenWrapper>
	);
};
