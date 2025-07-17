import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Credit_transactionsMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    credit_account_id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    type: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    description: z.literal(true).optional(),
    date: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
  })
  .strict();

export const Credit_transactionsMinAggregateInputObjectSchema = Schema;
