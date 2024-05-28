import { z } from 'zod';

const carsSchema = z.object({
	id: z.string(),
	name: z.string().min(1).max(100),
	description: z.string().min(1).max(255).nullish(),
	brand: z.string().min(1).max(100),
	year: z.number().positive(),
	km: z.number().positive(),
});

const carsCreateSchema = carsSchema.omit({ id: true });
const carsUpdateSchema = carsCreateSchema.partial();

export { carsCreateSchema, carsSchema, carsUpdateSchema };
