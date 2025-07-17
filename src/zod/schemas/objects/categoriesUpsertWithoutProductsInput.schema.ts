import { z } from 'zod';
import { categoriesUpdateWithoutProductsInputObjectSchema } from './categoriesUpdateWithoutProductsInput.schema';
import { categoriesUncheckedUpdateWithoutProductsInputObjectSchema } from './categoriesUncheckedUpdateWithoutProductsInput.schema';
import { categoriesCreateWithoutProductsInputObjectSchema } from './categoriesCreateWithoutProductsInput.schema';
import { categoriesUncheckedCreateWithoutProductsInputObjectSchema } from './categoriesUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesUpsertWithoutProductsInput> = z
  .object({
    update: z.union([
      z.lazy(() => categoriesUpdateWithoutProductsInputObjectSchema),
      z.lazy(() => categoriesUncheckedUpdateWithoutProductsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => categoriesCreateWithoutProductsInputObjectSchema),
      z.lazy(() => categoriesUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
  })
  .strict();

export const categoriesUpsertWithoutProductsInputObjectSchema = Schema;
