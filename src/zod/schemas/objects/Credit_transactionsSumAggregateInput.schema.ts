import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Credit_transactionsSumAggregateInputType> = z
  .object({
    amount: z.literal(true).optional(),
  })
  .strict();

export const Credit_transactionsSumAggregateInputObjectSchema = Schema;
