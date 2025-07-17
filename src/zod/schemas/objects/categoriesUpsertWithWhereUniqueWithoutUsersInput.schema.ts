import { z } from 'zod';
import { categoriesWhereUniqueInputObjectSchema } from './categoriesWhereUniqueInput.schema';
import { categoriesUpdateWithoutUsersInputObjectSchema } from './categoriesUpdateWithoutUsersInput.schema';
import { categoriesUncheckedUpdateWithoutUsersInputObjectSchema } from './categoriesUncheckedUpdateWithoutUsersInput.schema';
import { categoriesCreateWithoutUsersInputObjectSchema } from './categoriesCreateWithoutUsersInput.schema';
import { categoriesUncheckedCreateWithoutUsersInputObjectSchema } from './categoriesUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesUpsertWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => categoriesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => categoriesUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => categoriesUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => categoriesCreateWithoutUsersInputObjectSchema),
        z.lazy(() => categoriesUncheckedCreateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const categoriesUpsertWithWhereUniqueWithoutUsersInputObjectSchema =
  Schema;
