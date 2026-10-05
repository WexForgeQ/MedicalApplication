import type { SliceCommon } from '@core/types';
import { doctorsSliceCommon } from '@features/doctors/store';
import { servicesSliceCommon } from '@features/services/store';
import { stocksSliceCommon } from '@features/stocks/store';

export const sliceCommons: SliceCommon[] = [
	doctorsSliceCommon,
	stocksSliceCommon,
	servicesSliceCommon,
];
