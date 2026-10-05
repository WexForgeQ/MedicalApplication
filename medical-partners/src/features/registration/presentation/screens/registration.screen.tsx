import { resetSlicesStates } from '@core/utils';
import { useAppDispatch } from '@store';
import { useLayoutEffect } from 'react';
import { AppLogo, RegistrationForm } from '../components';

export const RegistrationScreen = () => {
	const dispatch = useAppDispatch();
	useLayoutEffect(() => {
		resetSlicesStates(dispatch, []);
		sessionStorage.clear();
		localStorage.clear();
	});

	return (
		<div className="flex h-screen w-screen flex-row bg-bgGray font-nunito">
			<div className="flex flex-1 items-center justify-center">
				<AppLogo />
			</div>
			<div className="flex h-full items-center pr-[94px]">
				<RegistrationForm />
			</div>
		</div>
	);
};
