import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Order_itemsSumAggregateInputType> = z
  .object({
    quantity: z.literal(true).optional(),
    unit_price: z.literal(true).optional(),
    total_price: z.literal(true).optional(),
  })
  .strict();

export const Order_itemsSumAggregateInputObjectSchema = Schema;
