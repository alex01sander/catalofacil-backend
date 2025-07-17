import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.product_costsCreateManyInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string(),
    store_id: z.string().optional().nullable(),
    product_name: z.string(),
    cost_price: z.number(),
    desired_margin: z.number(),
    suggested_price: z.number(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  })
  .strict();

export const product_costsCreateManyInputObjectSchema = Schema;
