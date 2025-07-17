import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Credit_accountsAvgAggregateInputType> = z
  .object({
    total_debt: z.literal(true).optional(),
  })
  .strict();

export const Credit_accountsAvgAggregateInputObjectSchema = Schema;
