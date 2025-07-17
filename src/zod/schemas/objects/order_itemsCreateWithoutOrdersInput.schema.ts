import { z } from 'zod';
import { productsCreateNestedOneWithoutOrder_itemsInputObjectSchema } from './productsCreateNestedOneWithoutOrder_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsCreateWithoutOrdersInput> = z
  .object({
    id: z.string().optional(),
    quantity: z.number().optional(),
    unit_price: z.number(),
    total_price: z.number(),
    created_at: z.coerce.date().optional().nullable(),
    products: z.lazy(
      () => productsCreateNestedOneWithoutOrder_itemsInputObjectSchema,
    ),
  })
  .strict();

export const order_itemsCreateWithoutOrdersInputObjectSchema = Schema;
