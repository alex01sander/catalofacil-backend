import { z } from 'zod';
import { categoriesWhereUniqueInputObjectSchema } from './categoriesWhereUniqueInput.schema';
import { categoriesCreateWithoutStoresInputObjectSchema } from './categoriesCreateWithoutStoresInput.schema';
import { categoriesUncheckedCreateWithoutStoresInputObjectSchema } from './categoriesUncheckedCreateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesCreateOrConnectWithoutStoresInput> = z
  .object({
    where: z.lazy(() => categoriesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => categoriesCreateWithoutStoresInputObjectSchema),
      z.lazy(() => categoriesUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
  })
  .strict();

export const categoriesCreateOrConnectWithoutStoresInputObjectSchema = Schema;
