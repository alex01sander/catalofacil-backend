import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.expensesCreateManyInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string(),
    store_id: z.string().optional().nullable(),
    name: z.string(),
    category: z.string(),
    type: z.string(),
    amount: z.number(),
    due_date: z.coerce.date().optional().nullable(),
    is_recurring: z.boolean().optional().nullable(),
    recurring_frequency: z.string().optional().nullable(),
    status: z.string().optional().nullable(),
    paid_date: z.coerce.date().optional().nullable(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  })
  .strict();

export const expensesCreateManyInputObjectSchema = Schema;
