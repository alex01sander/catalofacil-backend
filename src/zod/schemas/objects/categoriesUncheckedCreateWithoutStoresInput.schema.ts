import { z } from 'zod';
import { productsUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema } from './productsUncheckedCreateNestedManyWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesUncheckedCreateWithoutStoresInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string(),
    name: z.string(),
    color: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    products: z
      .lazy(
        () =>
          productsUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const categoriesUncheckedCreateWithoutStoresInputObjectSchema = Schema;
