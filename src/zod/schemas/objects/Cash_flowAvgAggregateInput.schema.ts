import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Cash_flowAvgAggregateInputType> = z
  .object({
    amount: z.literal(true).optional(),
  })
  .strict();

export const Cash_flowAvgAggregateInputObjectSchema = Schema;
