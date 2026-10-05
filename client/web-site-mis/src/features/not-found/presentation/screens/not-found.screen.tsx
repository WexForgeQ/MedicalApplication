import { AppLogoIcon } from '@core/presentation/components/icons';

export const NotFoundScreen = () => {
	return (
		<div className="flex h-screen w-screen items-center justify-center font-nunito">
			<div className="flex flex-col items-center gap-[10px] text-primary">
				<AppLogoIcon className="size-[200px]" />
				<p className="text-[100px] font-semibold leading-[1.3669]">404</p>
			</div>
		</div>
	);
};
