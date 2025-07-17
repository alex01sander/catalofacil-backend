import { z } from 'zod';
import { audit_log_entriesCreateInputObjectSchema } from './objects/audit_log_entriesCreateInput.schema';
import { audit_log_entriesUncheckedCreateInputObjectSchema } from './objects/audit_log_entriesUncheckedCreateInput.schema';

export const audit_log_entriesCreateOneSchema = z.object({
  data: z.union([
    audit_log_entriesCreateInputObjectSchema,
    audit_log_entriesUncheckedCreateInputObjectSchema,
  ]),
});
