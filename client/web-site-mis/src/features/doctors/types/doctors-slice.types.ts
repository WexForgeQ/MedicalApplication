import type { GetPaginatedDataProps } from '@core/types';
import type { Doctor } from './doctor.types';

export interface DoctorsSliceDataState {
	lastGetDoctorsProps: GetPaginatedDataProps<Doctor, { specializationId?: string }> | null;
}
