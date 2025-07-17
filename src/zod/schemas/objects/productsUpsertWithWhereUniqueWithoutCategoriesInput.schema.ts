import { z } from 'zod';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithoutCategoriesInputObjectSchema } from './productsUpdateWithoutCategoriesInput.schema';
import { productsUncheckedUpdateWithoutCategoriesInputObjectSchema } from './productsUncheckedUpdateWithoutCategoriesInput.schema';
import { productsCreateWithoutCategoriesInputObjectSchema } from './productsCreateWithoutCategoriesInput.schema';
import { productsUncheckedCreateWithoutCategoriesInputObjectSchema } from './productsUncheckedCreateWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUpsertWithWhereUniqueWithoutCategoriesInput> =
  z
    .object({
      where: z.lazy(() => productsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => productsUpdateWithoutCategoriesInputObjectSchema),
        z.lazy(() => productsUncheckedUpdateWithoutCategoriesInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => productsCreateWithoutCategoriesInputObjectSchema),
        z.lazy(() => productsUncheckedCreateWithoutCategoriesInputObjectSchema),
      ]),
    })
    .strict();

export const productsUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema =
  Schema;
