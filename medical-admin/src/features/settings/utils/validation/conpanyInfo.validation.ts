import z from 'zod';

export const CompanyInfoScheme = z.object({
	id: z.string().optional(),
	companyName: z.string().nullable().optional(),
	phoneNumber: z.string().nullable().optional(),
	unp: z.string().nullable().optional(),
	currentAccount: z.string().nullable().optional(),
	bik: z.string().nullable().optional(),
	directorFio: z.string().nullable().optional(),
	bankAddress: z.string().nullable().optional(),
	companyAddress: z.string().nullable().optional(),
	companyDescription: z.string().nullable().optional(),
});

export type CompanyInfoSchemeType = z.infer<typeof CompanyInfoScheme>;
