import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    factor_id: z.literal(true).optional(),
    aal: z.literal(true).optional(),
    not_after: z.literal(true).optional(),
    refreshed_at: z.literal(true).optional(),
    user_agent: z.literal(true).optional(),
    ip: z.literal(true).optional(),
    tag: z.literal(true).optional(),
  })
  .strict();

export const SessionsMaxAggregateInputObjectSchema = Schema;
