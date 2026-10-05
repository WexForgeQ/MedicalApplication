import { LoadingProccessBar } from '@core/presentation/components';

export const LoadingFallbackScreen = () => {
	return (
		<div className="flex flex-1 items-center justify-center">
			<LoadingProccessBar />
		</div>
	);
};
