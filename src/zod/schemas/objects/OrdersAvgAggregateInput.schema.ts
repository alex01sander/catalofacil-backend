import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrdersAvgAggregateInputType> = z
  .object({
    total_amount: z.literal(true).optional(),
  })
  .strict();

export const OrdersAvgAggregateInputObjectSchema = Schema;
