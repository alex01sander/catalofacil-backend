import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpensesSumAggregateInputType> = z
  .object({
    amount: z.literal(true).optional(),
  })
  .strict();

export const ExpensesSumAggregateInputObjectSchema = Schema;
