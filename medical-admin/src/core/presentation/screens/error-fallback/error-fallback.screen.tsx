import { APP_ROUTES } from '@core/constants';
import { Button } from '@core/presentation/components';
import { HOME_ROUTES } from '@features/home/constants';

export const ErrorFallbackScreen = () => {
	return (
		<div className="flex h-screen w-screen items-center justify-center font-nunito">
			<div className="flex flex-col items-center gap-[20px]">
				<p className="text-[20px] font-semibold text-primary">Что-то пошло не так</p>
				<div className="flex flex-row gap-[20px]">
					<Button
						className="px-[32px]"
						onClick={() => {
							window.location.replace(
								`${APP_ROUTES.home.path}${HOME_ROUTES.clients.path}`,
							);
						}}
					>
						На главную
					</Button>
					<Button className="px-[32px]" onClick={() => window.location.reload()}>
						Перезагрузить
					</Button>
				</div>
			</div>
		</div>
	);
};
