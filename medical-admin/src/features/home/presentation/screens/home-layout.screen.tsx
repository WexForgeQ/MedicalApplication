import { LoadingFallbackScreen } from '@core';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components';

export const HomeLayout = () => {
	return (
		<div className="scrollbar-custom flex h-screen w-screen bg-bgGray font-nunito">
			<Sidebar />
			<Suspense fallback={<LoadingFallbackScreen />}>
				<div className="flex flex-1 pt-[27px]">
					<Outlet />
				</div>
			</Suspense>
		</div>
	);
};
