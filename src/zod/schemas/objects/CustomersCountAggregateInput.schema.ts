import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomersCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    store_owner_id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    email: z.literal(true).optional(),
    phone: z.literal(true).optional(),
    address: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    store_id: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const CustomersCountAggregateInputObjectSchema = Schema;
