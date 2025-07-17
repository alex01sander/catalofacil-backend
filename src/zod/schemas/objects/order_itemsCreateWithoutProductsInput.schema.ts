import { z } from 'zod';
import { ordersCreateNestedOneWithoutOrder_itemsInputObjectSchema } from './ordersCreateNestedOneWithoutOrder_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsCreateWithoutProductsInput> = z
  .object({
    id: z.string().optional(),
    quantity: z.number().optional(),
    unit_price: z.number(),
    total_price: z.number(),
    created_at: z.coerce.date().optional().nullable(),
    orders: z.lazy(
      () => ordersCreateNestedOneWithoutOrder_itemsInputObjectSchema,
    ),
  })
  .strict();

export const order_itemsCreateWithoutProductsInputObjectSchema = Schema;
