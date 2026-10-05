import type { AuthFormSchemeType } from '../utils';

export const enum AuthLocalStorage {
	Refresh = 'Refresh',
	Access = 'Access',
}

export type AuthData = AuthFormSchemeType;
