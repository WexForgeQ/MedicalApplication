import { AppLogoIcon } from '@core/presentation/components/icons';

export const AppLogo = () => {
	return (
		<div className="flex flex-col items-center gap-[10px]">
			<AppLogoIcon />
			<p className="text-[60px] font-semibold leading-[1.3669] text-primary">DevMed</p>
		</div>
	);
};
