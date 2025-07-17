import { z } from 'zod';
import { categoriesWhereUniqueInputObjectSchema } from './categoriesWhereUniqueInput.schema';
import { categoriesCreateWithoutProductsInputObjectSchema } from './categoriesCreateWithoutProductsInput.schema';
import { categoriesUncheckedCreateWithoutProductsInputObjectSchema } from './categoriesUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesCreateOrConnectWithoutProductsInput> =
  z
    .object({
      where: z.lazy(() => categoriesWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => categoriesCreateWithoutProductsInputObjectSchema),
        z.lazy(() => categoriesUncheckedCreateWithoutProductsInputObjectSchema),
      ]),
    })
    .strict();

export const categoriesCreateOrConnectWithoutProductsInputObjectSchema = Schema;
