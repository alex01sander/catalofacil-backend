import { z } from 'zod';
import { audit_log_entriesWhereUniqueInputObjectSchema } from './objects/audit_log_entriesWhereUniqueInput.schema';

export const audit_log_entriesDeleteOneSchema = z.object({
  where: audit_log_entriesWhereUniqueInputObjectSchema,
});
