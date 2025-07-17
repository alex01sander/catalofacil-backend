import { z } from 'zod';
import { audit_log_entriesCreateManyInputObjectSchema } from './objects/audit_log_entriesCreateManyInput.schema';

export const audit_log_entriesCreateManySchema = z.object({
  data: z.union([
    audit_log_entriesCreateManyInputObjectSchema,
    z.array(audit_log_entriesCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
