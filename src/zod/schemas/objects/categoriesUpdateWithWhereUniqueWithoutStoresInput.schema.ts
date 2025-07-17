import { z } from 'zod';
import { categoriesWhereUniqueInputObjectSchema } from './categoriesWhereUniqueInput.schema';
import { categoriesUpdateWithoutStoresInputObjectSchema } from './categoriesUpdateWithoutStoresInput.schema';
import { categoriesUncheckedUpdateWithoutStoresInputObjectSchema } from './categoriesUncheckedUpdateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesUpdateWithWhereUniqueWithoutStoresInput> =
  z
    .object({
      where: z.lazy(() => categoriesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => categoriesUpdateWithoutStoresInputObjectSchema),
        z.lazy(() => categoriesUncheckedUpdateWithoutStoresInputObjectSchema),
      ]),
    })
    .strict();

export const categoriesUpdateWithWhereUniqueWithoutStoresInputObjectSchema =
  Schema;
