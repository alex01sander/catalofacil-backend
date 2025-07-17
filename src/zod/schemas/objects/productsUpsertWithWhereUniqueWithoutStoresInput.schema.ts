import { z } from 'zod';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithoutStoresInputObjectSchema } from './productsUpdateWithoutStoresInput.schema';
import { productsUncheckedUpdateWithoutStoresInputObjectSchema } from './productsUncheckedUpdateWithoutStoresInput.schema';
import { productsCreateWithoutStoresInputObjectSchema } from './productsCreateWithoutStoresInput.schema';
import { productsUncheckedCreateWithoutStoresInputObjectSchema } from './productsUncheckedCreateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUpsertWithWhereUniqueWithoutStoresInput> =
  z
    .object({
      where: z.lazy(() => productsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => productsUpdateWithoutStoresInputObjectSchema),
        z.lazy(() => productsUncheckedUpdateWithoutStoresInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => productsCreateWithoutStoresInputObjectSchema),
        z.lazy(() => productsUncheckedCreateWithoutStoresInputObjectSchema),
      ]),
    })
    .strict();

export const productsUpsertWithWhereUniqueWithoutStoresInputObjectSchema =
  Schema;
