import { z } from 'zod';
import { audit_log_entriesOrderByWithRelationInputObjectSchema } from './objects/audit_log_entriesOrderByWithRelationInput.schema';
import { audit_log_entriesWhereInputObjectSchema } from './objects/audit_log_entriesWhereInput.schema';
import { audit_log_entriesWhereUniqueInputObjectSchema } from './objects/audit_log_entriesWhereUniqueInput.schema';
import { audit_log_entriesScalarFieldEnumSchema } from './enums/audit_log_entriesScalarFieldEnum.schema';

export const audit_log_entriesFindFirstSchema = z.object({
  orderBy: z
    .union([
      audit_log_entriesOrderByWithRelationInputObjectSchema,
      audit_log_entriesOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: audit_log_entriesWhereInputObjectSchema.optional(),
  cursor: audit_log_entriesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(audit_log_entriesScalarFieldEnumSchema).optional(),
});
