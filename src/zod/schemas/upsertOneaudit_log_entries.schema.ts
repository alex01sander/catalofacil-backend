import { z } from 'zod';
import { audit_log_entriesWhereUniqueInputObjectSchema } from './objects/audit_log_entriesWhereUniqueInput.schema';
import { audit_log_entriesCreateInputObjectSchema } from './objects/audit_log_entriesCreateInput.schema';
import { audit_log_entriesUncheckedCreateInputObjectSchema } from './objects/audit_log_entriesUncheckedCreateInput.schema';
import { audit_log_entriesUpdateInputObjectSchema } from './objects/audit_log_entriesUpdateInput.schema';
import { audit_log_entriesUncheckedUpdateInputObjectSchema } from './objects/audit_log_entriesUncheckedUpdateInput.schema';

export const audit_log_entriesUpsertSchema = z.object({
  where: audit_log_entriesWhereUniqueInputObjectSchema,
  create: z.union([
    audit_log_entriesCreateInputObjectSchema,
    audit_log_entriesUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    audit_log_entriesUpdateInputObjectSchema,
    audit_log_entriesUncheckedUpdateInputObjectSchema,
  ]),
});
