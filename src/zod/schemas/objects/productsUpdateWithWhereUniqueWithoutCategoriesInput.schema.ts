import { z } from 'zod';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithoutCategoriesInputObjectSchema } from './productsUpdateWithoutCategoriesInput.schema';
import { productsUncheckedUpdateWithoutCategoriesInputObjectSchema } from './productsUncheckedUpdateWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUpdateWithWhereUniqueWithoutCategoriesInput> =
  z
    .object({
      where: z.lazy(() => productsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => productsUpdateWithoutCategoriesInputObjectSchema),
        z.lazy(() => productsUncheckedUpdateWithoutCategoriesInputObjectSchema),
      ]),
    })
    .strict();

export const productsUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema =
  Schema;
