import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Mfa_amr_claimsCountAggregateInputType> = z
  .object({
    session_id: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    authentication_method: z.literal(true).optional(),
    id: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const Mfa_amr_claimsCountAggregateInputObjectSchema = Schema;
