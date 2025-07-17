import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Refresh_tokensCountAggregateInputType> = z
  .object({
    instance_id: z.literal(true).optional(),
    id: z.literal(true).optional(),
    token: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    revoked: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    parent: z.literal(true).optional(),
    session_id: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const Refresh_tokensCountAggregateInputObjectSchema = Schema;
