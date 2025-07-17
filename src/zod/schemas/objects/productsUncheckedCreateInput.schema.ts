import { z } from 'zod';
import { productsCreateimagesInputObjectSchema } from './productsCreateimagesInput.schema';
import { order_itemsUncheckedCreateNestedManyWithoutProductsInputObjectSchema } from './order_itemsUncheckedCreateNestedManyWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string(),
    category_id: z.string().optional().nullable(),
    name: z.string(),
    description: z.string().optional().nullable(),
    price: z.number().optional(),
    stock: z.number().optional(),
    is_active: z.boolean().optional().nullable(),
    image: z.string().optional().nullable(),
    images: z
      .union([
        z.lazy(() => productsCreateimagesInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    store_id: z.string().optional().nullable(),
    order_items: z
      .lazy(
        () =>
          order_itemsUncheckedCreateNestedManyWithoutProductsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const productsUncheckedCreateInputObjectSchema = Schema;
