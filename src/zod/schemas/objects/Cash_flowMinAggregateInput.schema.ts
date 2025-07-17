import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Cash_flowMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    store_id: z.literal(true).optional(),
    type: z.literal(true).optional(),
    category: z.literal(true).optional(),
    description: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    date: z.literal(true).optional(),
    payment_method: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
  })
  .strict();

export const Cash_flowMinAggregateInputObjectSchema = Schema;
