import { z } from 'zod';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsCreateWithoutCategoriesInputObjectSchema } from './productsCreateWithoutCategoriesInput.schema';
import { productsUncheckedCreateWithoutCategoriesInputObjectSchema } from './productsUncheckedCreateWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsCreateOrConnectWithoutCategoriesInput> =
  z
    .object({
      where: z.lazy(() => productsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => productsCreateWithoutCategoriesInputObjectSchema),
        z.lazy(() => productsUncheckedCreateWithoutCategoriesInputObjectSchema),
      ]),
    })
    .strict();

export const productsCreateOrConnectWithoutCategoriesInputObjectSchema = Schema;
