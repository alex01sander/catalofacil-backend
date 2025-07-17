import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalesCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    product_name: z.literal(true).optional(),
    quantity: z.literal(true).optional(),
    unit_price: z.literal(true).optional(),
    total_price: z.literal(true).optional(),
    sale_date: z.literal(true).optional(),
    status: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    store_id: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const SalesCountAggregateInputObjectSchema = Schema;
