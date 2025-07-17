import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Product_costsMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    store_id: z.literal(true).optional(),
    product_name: z.literal(true).optional(),
    cost_price: z.literal(true).optional(),
    desired_margin: z.literal(true).optional(),
    suggested_price: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
  })
  .strict();

export const Product_costsMinAggregateInputObjectSchema = Schema;
