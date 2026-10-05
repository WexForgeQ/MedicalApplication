import {
	ActsConfig,
	AuthConfig,
	ChecksConfig,
	HomeConfig,
	NotFoundConfig,
	PatientsConfig,
} from '@features';
import { RegistrationConfig } from '@features/registration';
import { SettingsConfig } from '@features/settings';
import type { RouteObject } from 'react-router-dom';

export const appRouterConfig: RouteObject[] = [
	AuthConfig,
	NotFoundConfig,
	RegistrationConfig,
	{
		...HomeConfig,
		children: [PatientsConfig, ActsConfig, ChecksConfig, SettingsConfig],
	},
];
