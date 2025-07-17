import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cash_flowUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string(),
    store_id: z.string().optional().nullable(),
    type: z.string(),
    category: z.string(),
    description: z.string(),
    amount: z.number(),
    date: z.coerce.date().optional(),
    payment_method: z.string().optional().nullable(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  })
  .strict();

export const cash_flowUncheckedCreateInputObjectSchema = Schema;
