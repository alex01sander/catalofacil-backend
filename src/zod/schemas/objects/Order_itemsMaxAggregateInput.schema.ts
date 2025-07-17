import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Order_itemsMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    order_id: z.literal(true).optional(),
    product_id: z.literal(true).optional(),
    quantity: z.literal(true).optional(),
    unit_price: z.literal(true).optional(),
    total_price: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
  })
  .strict();

export const Order_itemsMaxAggregateInputObjectSchema = Schema;
