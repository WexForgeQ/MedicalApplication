import { LoadingFallbackScreen } from '@core';
import { APP_ROUTES } from '@core/constants';
import { HOME_ROUTES } from '@features/home/constants';
import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Footer, Navbar } from '../components';

export const HomeLayout = () => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === APP_ROUTES.home.path) {
			navigate(HOME_ROUTES.main.path);
		}
	}, []);

	return (
		<div className="flex h-screen w-screen flex-col justify-between overflow-x-hidden font-nunito">
			<div className="flex flex-1 flex-col gap-[40px]">
				<Navbar />
				<Suspense fallback={<LoadingFallbackScreen />}>
					<Outlet />
				</Suspense>
			</div>
			<Footer />
		</div>
	);
};
