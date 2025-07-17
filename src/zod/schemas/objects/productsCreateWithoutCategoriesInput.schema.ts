import { z } from 'zod';
import { productsCreateimagesInputObjectSchema } from './productsCreateimagesInput.schema';
import { order_itemsCreateNestedManyWithoutProductsInputObjectSchema } from './order_itemsCreateNestedManyWithoutProductsInput.schema';
import { storesCreateNestedOneWithoutProductsInputObjectSchema } from './storesCreateNestedOneWithoutProductsInput.schema';
import { usersCreateNestedOneWithoutProductsInputObjectSchema } from './usersCreateNestedOneWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsCreateWithoutCategoriesInput> = z
  .object({
    id: z.string().optional(),
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
    order_items: z
      .lazy(() => order_itemsCreateNestedManyWithoutProductsInputObjectSchema)
      .optional(),
    stores: z
      .lazy(() => storesCreateNestedOneWithoutProductsInputObjectSchema)
      .optional(),
    users: z.lazy(() => usersCreateNestedOneWithoutProductsInputObjectSchema),
  })
  .strict();

export const productsCreateWithoutCategoriesInputObjectSchema = Schema;
