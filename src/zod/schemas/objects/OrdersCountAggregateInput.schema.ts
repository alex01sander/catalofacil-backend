import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrdersCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    store_owner_id: z.literal(true).optional(),
    customer_id: z.literal(true).optional(),
    customer_name: z.literal(true).optional(),
    customer_email: z.literal(true).optional(),
    customer_phone: z.literal(true).optional(),
    total_amount: z.literal(true).optional(),
    status: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    store_id: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const OrdersCountAggregateInputObjectSchema = Schema;
