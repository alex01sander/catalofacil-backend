import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Audit_log_entriesMinAggregateInputType> = z
  .object({
    instance_id: z.literal(true).optional(),
    id: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    ip_address: z.literal(true).optional(),
  })
  .strict();

export const Audit_log_entriesMinAggregateInputObjectSchema = Schema;
