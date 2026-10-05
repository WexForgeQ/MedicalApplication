import { z } from 'zod';

export const MainQuestionFormScheme = z.object({
	name: z.string().trim().min(5),
	email: z.string().trim().min(1),
	phoneNumber: z.string().min(12),
	question: z.string().trim().min(5),
});

export type MainQuestionFormSchemeType = z.infer<typeof MainQuestionFormScheme>;
