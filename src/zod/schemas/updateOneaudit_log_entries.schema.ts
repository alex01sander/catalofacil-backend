import { z } from 'zod';
import { audit_log_entriesUpdateInputObjectSchema } from './objects/audit_log_entriesUpdateInput.schema';
import { audit_log_entriesUncheckedUpdateInputObjectSchema } from './objects/audit_log_entriesUncheckedUpdateInput.schema';
import { audit_log_entriesWhereUniqueInputObjectSchema } from './objects/audit_log_entriesWhereUniqueInput.schema';

export const audit_log_entriesUpdateOneSchema = z.object({
  data: z.union([
    audit_log_entriesUpdateInputObjectSchema,
    audit_log_entriesUncheckedUpdateInputObjectSchema,
  ]),
  where: audit_log_entriesWhereUniqueInputObjectSchema,
});
