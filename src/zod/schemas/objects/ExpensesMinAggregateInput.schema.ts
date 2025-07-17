import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpensesMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    store_id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    category: z.literal(true).optional(),
    type: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    due_date: z.literal(true).optional(),
    is_recurring: z.literal(true).optional(),
    recurring_frequency: z.literal(true).optional(),
    status: z.literal(true).optional(),
    paid_date: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
  })
  .strict();

export const ExpensesMinAggregateInputObjectSchema = Schema;
