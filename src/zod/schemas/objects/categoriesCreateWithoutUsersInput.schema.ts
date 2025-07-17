import { z } from 'zod';
import { storesCreateNestedOneWithoutCategoriesInputObjectSchema } from './storesCreateNestedOneWithoutCategoriesInput.schema';
import { productsCreateNestedManyWithoutCategoriesInputObjectSchema } from './productsCreateNestedManyWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesCreateWithoutUsersInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    color: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    stores: z
      .lazy(() => storesCreateNestedOneWithoutCategoriesInputObjectSchema)
      .optional(),
    products: z
      .lazy(() => productsCreateNestedManyWithoutCategoriesInputObjectSchema)
      .optional(),
  })
  .strict();

export const categoriesCreateWithoutUsersInputObjectSchema = Schema;
