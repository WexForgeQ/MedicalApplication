import { z } from 'zod';

export const DoctorsFiltersFormScheme = z.object({
	specializationId: z.string().optional(),
	surname: z.string().optional(),
	office: z.string().optional(),
});

export type DoctorsFiltersFormSchemeType = z.infer<typeof DoctorsFiltersFormScheme>;
