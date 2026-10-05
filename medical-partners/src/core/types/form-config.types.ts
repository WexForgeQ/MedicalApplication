import type { z, ZodObject } from 'zod';

export type FormConfig<S extends ZodObject<any>> = {
	schema: S;
	defaultValues: z.infer<S>;
};
