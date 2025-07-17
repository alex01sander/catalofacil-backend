import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.One_time_tokensMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    token_type: z.literal(true).optional(),
    token_hash: z.literal(true).optional(),
    relates_to: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
  })
  .strict();

export const One_time_tokensMaxAggregateInputObjectSchema = Schema;
