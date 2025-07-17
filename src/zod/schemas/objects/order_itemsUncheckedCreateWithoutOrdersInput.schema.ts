import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsUncheckedCreateWithoutOrdersInput> = z
  .object({
    id: z.string().optional(),
    product_id: z.string(),
    quantity: z.number().optional(),
    unit_price: z.number(),
    total_price: z.number(),
    created_at: z.coerce.date().optional().nullable(),
  })
  .strict();

export const order_itemsUncheckedCreateWithoutOrdersInputObjectSchema = Schema;
