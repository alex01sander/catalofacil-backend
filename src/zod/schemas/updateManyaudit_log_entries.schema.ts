import { z } from 'zod';
import { audit_log_entriesUpdateManyMutationInputObjectSchema } from './objects/audit_log_entriesUpdateManyMutationInput.schema';
import { audit_log_entriesWhereInputObjectSchema } from './objects/audit_log_entriesWhereInput.schema';

export const audit_log_entriesUpdateManySchema = z.object({
  data: audit_log_entriesUpdateManyMutationInputObjectSchema,
  where: audit_log_entriesWhereInputObjectSchema.optional(),
});
