import { z } from 'zod';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithoutStoresInputObjectSchema } from './productsUpdateWithoutStoresInput.schema';
import { productsUncheckedUpdateWithoutStoresInputObjectSchema } from './productsUncheckedUpdateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUpdateWithWhereUniqueWithoutStoresInput> =
  z
    .object({
      where: z.lazy(() => productsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => productsUpdateWithoutStoresInputObjectSchema),
        z.lazy(() => productsUncheckedUpdateWithoutStoresInputObjectSchema),
      ]),
    })
    .strict();

export const productsUpdateWithWhereUniqueWithoutStoresInputObjectSchema =
  Schema;
