import { z } from 'zod';
import { storesCreateNestedOneWithoutCategoriesInputObjectSchema } from './storesCreateNestedOneWithoutCategoriesInput.schema';
import { usersCreateNestedOneWithoutCategoriesInputObjectSchema } from './usersCreateNestedOneWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesCreateWithoutProductsInput> = z
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
    users: z.lazy(() => usersCreateNestedOneWithoutCategoriesInputObjectSchema),
  })
  .strict();

export const categoriesCreateWithoutProductsInputObjectSchema = Schema;
