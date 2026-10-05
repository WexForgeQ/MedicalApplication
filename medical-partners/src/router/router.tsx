import { useRoutes } from 'react-router-dom';
import { appRouterConfig } from './router-config';

export const AppRouter = () => {
	const screensRoutes = useRoutes(appRouterConfig);
	return screensRoutes;
};
