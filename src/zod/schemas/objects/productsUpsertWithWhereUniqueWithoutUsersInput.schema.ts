import { z } from 'zod';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithoutUsersInputObjectSchema } from './productsUpdateWithoutUsersInput.schema';
import { productsUncheckedUpdateWithoutUsersInputObjectSchema } from './productsUncheckedUpdateWithoutUsersInput.schema';
import { productsCreateWithoutUsersInputObjectSchema } from './productsCreateWithoutUsersInput.schema';
import { productsUncheckedCreateWithoutUsersInputObjectSchema } from './productsUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUpsertWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => productsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => productsUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => productsUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => productsCreateWithoutUsersInputObjectSchema),
        z.lazy(() => productsUncheckedCreateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const productsUpsertWithWhereUniqueWithoutUsersInputObjectSchema =
  Schema;
