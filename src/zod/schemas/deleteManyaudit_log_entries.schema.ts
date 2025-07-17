import { z } from 'zod';
import { audit_log_entriesWhereInputObjectSchema } from './objects/audit_log_entriesWhereInput.schema';

export const audit_log_entriesDeleteManySchema = z.object({
  where: audit_log_entriesWhereInputObjectSchema.optional(),
});
