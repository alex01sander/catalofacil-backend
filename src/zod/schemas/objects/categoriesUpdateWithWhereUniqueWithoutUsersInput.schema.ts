import { z } from 'zod';
import { categoriesWhereUniqueInputObjectSchema } from './categoriesWhereUniqueInput.schema';
import { categoriesUpdateWithoutUsersInputObjectSchema } from './categoriesUpdateWithoutUsersInput.schema';
import { categoriesUncheckedUpdateWithoutUsersInputObjectSchema } from './categoriesUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesUpdateWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => categoriesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => categoriesUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => categoriesUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const categoriesUpdateWithWhereUniqueWithoutUsersInputObjectSchema =
  Schema;
