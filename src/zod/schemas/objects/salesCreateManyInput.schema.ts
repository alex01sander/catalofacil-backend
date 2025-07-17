import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.salesCreateManyInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string(),
    product_name: z.string(),
    quantity: z.number().optional(),
    unit_price: z.number(),
    total_price: z.number(),
    sale_date: z.coerce.date(),
    status: z.string().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    store_id: z.string().optional().nullable(),
  })
  .strict();

export const salesCreateManyInputObjectSchema = Schema;
