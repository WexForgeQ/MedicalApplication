import type { SliceCommon } from '@core/types';
import { slotsSliceCommon } from '@features/slots/store';
import { authSliceCommon } from '@features/auth/store';
import { homeSliceCommon } from '@features/home/store';
import { patientsSliceCommon } from '@features/patients/store';
import { personalSliceCommon } from '@features/personal/store';

export const sliceCommons: SliceCommon[] = [
	homeSliceCommon,
	authSliceCommon,
	patientsSliceCommon,
	personalSliceCommon,
	slotsSliceCommon,
];
