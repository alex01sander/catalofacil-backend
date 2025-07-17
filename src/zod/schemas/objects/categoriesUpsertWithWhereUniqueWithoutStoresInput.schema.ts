import { z } from 'zod';
import { categoriesWhereUniqueInputObjectSchema } from './categoriesWhereUniqueInput.schema';
import { categoriesUpdateWithoutStoresInputObjectSchema } from './categoriesUpdateWithoutStoresInput.schema';
import { categoriesUncheckedUpdateWithoutStoresInputObjectSchema } from './categoriesUncheckedUpdateWithoutStoresInput.schema';
import { categoriesCreateWithoutStoresInputObjectSchema } from './categoriesCreateWithoutStoresInput.schema';
import { categoriesUncheckedCreateWithoutStoresInputObjectSchema } from './categoriesUncheckedCreateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesUpsertWithWhereUniqueWithoutStoresInput> =
  z
    .object({
      where: z.lazy(() => categoriesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => categoriesUpdateWithoutStoresInputObjectSchema),
        z.lazy(() => categoriesUncheckedUpdateWithoutStoresInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => categoriesCreateWithoutStoresInputObjectSchema),
        z.lazy(() => categoriesUncheckedCreateWithoutStoresInputObjectSchema),
      ]),
    })
    .strict();

export const categoriesUpsertWithWhereUniqueWithoutStoresInputObjectSchema =
  Schema;
