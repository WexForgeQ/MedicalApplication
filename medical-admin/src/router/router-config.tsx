import {
	ActsConfig,
	AuthConfig,
	ChecksConfig,
	HomeConfig,
	NotFoundConfig,
	PatientsConfig,
} from '@features';
import { SettingsConfig } from '@features/settings';
import type { RouteObject } from 'react-router-dom';

export const appRouterConfig: RouteObject[] = [
	AuthConfig,
	NotFoundConfig,
	{
		...HomeConfig,
		children: [PatientsConfig, ActsConfig, ChecksConfig, SettingsConfig],
	},
];
