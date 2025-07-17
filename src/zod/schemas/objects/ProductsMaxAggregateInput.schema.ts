import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    category_id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
    price: z.literal(true).optional(),
    stock: z.literal(true).optional(),
    is_active: z.literal(true).optional(),
    image: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    store_id: z.literal(true).optional(),
  })
  .strict();

export const ProductsMaxAggregateInputObjectSchema = Schema;
