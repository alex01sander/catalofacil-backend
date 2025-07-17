import { z } from 'zod';
import { usersCreateNestedOneWithoutCategoriesInputObjectSchema } from './usersCreateNestedOneWithoutCategoriesInput.schema';
import { productsCreateNestedManyWithoutCategoriesInputObjectSchema } from './productsCreateNestedManyWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesCreateWithoutStoresInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    color: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    users: z.lazy(() => usersCreateNestedOneWithoutCategoriesInputObjectSchema),
    products: z
      .lazy(() => productsCreateNestedManyWithoutCategoriesInputObjectSchema)
      .optional(),
  })
  .strict();

export const categoriesCreateWithoutStoresInputObjectSchema = Schema;
