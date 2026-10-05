import { AuthConfig, HomeConfig, NotFoundConfig, PatientsConfig } from '@features';
import { AppointmentsConfig } from '@features/appointments-calendar';
import { HOME_ROUTES } from '@features/home/constants';
import { MaterialsConfig } from '@features/materials/presentation/screens/materials.config';
import { PersonalConfig } from '@features/personal';
import { SlotsConfig, SlotsMainConfig } from '@features/slots';
import { Navigate, type RouteObject } from 'react-router-dom';

export const appRouterConfig: RouteObject[] = [
	AuthConfig,
	NotFoundConfig,
	{
		...HomeConfig,
		children: [
			{
				index: true,
				element: <Navigate to={HOME_ROUTES.slotsMain.path} replace />,
			},
			PersonalConfig,
			PatientsConfig,
			SlotsConfig,
			AppointmentsConfig,
			SlotsMainConfig,
			MaterialsConfig,
		],
	},
];
