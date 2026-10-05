import { AppLogo } from '@features/auth/presentation/components';

export const LoadingFallbackScreen = () => {
	return (
		<div className="flex h-screen w-screen items-center justify-center bg-bgGray font-nunito">
			<div className="animate-logoPulse">
				<AppLogo />
			</div>
		</div>
	);
};
