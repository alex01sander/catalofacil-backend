import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IdentitiesCountAggregateInputType> = z
  .object({
    provider_id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    identity_data: z.literal(true).optional(),
    provider: z.literal(true).optional(),
    last_sign_in_at: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    email: z.literal(true).optional(),
    id: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const IdentitiesCountAggregateInputObjectSchema = Schema;
