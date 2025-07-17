import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersCreateManyInput> = z
  .object({
    id: z.string().optional(),
    store_owner_id: z.string(),
    customer_id: z.string().optional().nullable(),
    customer_name: z.string(),
    customer_email: z.string().optional().nullable(),
    customer_phone: z.string().optional().nullable(),
    total_amount: z.number().optional(),
    status: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    store_id: z.string().optional().nullable(),
  })
  .strict();

export const ordersCreateManyInputObjectSchema = Schema;
