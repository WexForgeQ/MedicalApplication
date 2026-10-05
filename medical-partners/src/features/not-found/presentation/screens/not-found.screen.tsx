import { AppLogoIcon } from '@core/presentation/components/icons';

export const NotFoundScreen = () => {
	return (
		<div className="flex h-screen w-screen items-center justify-center font-nunito">
			<div className="flex flex-col items-center gap-[10px]">
				<AppLogoIcon />
				<p className="text-[60px] font-semibold leading-[1.3669] text-primary">404</p>
			</div>
		</div>
	);
};
