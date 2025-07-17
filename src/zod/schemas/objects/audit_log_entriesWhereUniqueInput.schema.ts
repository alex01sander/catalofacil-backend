import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.audit_log_entriesWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const audit_log_entriesWhereUniqueInputObjectSchema = Schema;
