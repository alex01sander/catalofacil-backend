import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Credit_accountsMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    store_id: z.literal(true).optional(),
    customer_name: z.literal(true).optional(),
    customer_phone: z.literal(true).optional(),
    total_debt: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    status: z.literal(true).optional(),
  })
  .strict();

export const Credit_accountsMinAggregateInputObjectSchema = Schema;
