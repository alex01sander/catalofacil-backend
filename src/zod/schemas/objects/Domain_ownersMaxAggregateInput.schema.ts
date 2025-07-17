import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Domain_ownersMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    domain: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    domain_type: z.literal(true).optional(),
  })
  .strict();

export const Domain_ownersMaxAggregateInputObjectSchema = Schema;
