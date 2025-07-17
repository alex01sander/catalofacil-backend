import { z } from 'zod';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithoutUsersInputObjectSchema } from './productsUpdateWithoutUsersInput.schema';
import { productsUncheckedUpdateWithoutUsersInputObjectSchema } from './productsUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUpdateWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => productsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => productsUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => productsUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const productsUpdateWithWhereUniqueWithoutUsersInputObjectSchema =
  Schema;
