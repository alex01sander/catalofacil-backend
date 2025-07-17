import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Product_costsAvgAggregateInputType> = z
  .object({
    cost_price: z.literal(true).optional(),
    desired_margin: z.literal(true).optional(),
    suggested_price: z.literal(true).optional(),
  })
  .strict();

export const Product_costsAvgAggregateInputObjectSchema = Schema;
