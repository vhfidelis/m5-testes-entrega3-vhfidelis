import { z } from 'zod';
import { carsCreateSchema, carsSchema, carsUpdateSchema } from '../schemas';

type TCars = z.infer<typeof carsSchema>;
type TCarsCreate = z.infer<typeof carsCreateSchema>;
type TCarsUpdate = z.infer<typeof carsUpdateSchema>;

export { TCars, TCarsCreate, TCarsUpdate };
