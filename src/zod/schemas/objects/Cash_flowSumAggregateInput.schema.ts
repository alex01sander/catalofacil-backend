import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Cash_flowSumAggregateInputType> = z
  .object({
    amount: z.literal(true).optional(),
  })
  .strict();

export const Cash_flowSumAggregateInputObjectSchema = Schema;
