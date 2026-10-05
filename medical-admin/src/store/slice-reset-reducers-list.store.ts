import type { SliceCommon } from '@core/types';
import { authSliceCommon } from '@features/auth/store';
import { homeSliceCommon } from '@features/home/store';
import { patientsSliceCommon } from '@features/patients/store';
import { settingsSliceCommon } from '@features/settings/store';

export const sliceCommons: SliceCommon[] = [
	homeSliceCommon,
	authSliceCommon,
	patientsSliceCommon,
	settingsSliceCommon,
];
