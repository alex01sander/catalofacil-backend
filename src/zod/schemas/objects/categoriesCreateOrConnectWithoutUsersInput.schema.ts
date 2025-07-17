import { z } from 'zod';
import { categoriesWhereUniqueInputObjectSchema } from './categoriesWhereUniqueInput.schema';
import { categoriesCreateWithoutUsersInputObjectSchema } from './categoriesCreateWithoutUsersInput.schema';
import { categoriesUncheckedCreateWithoutUsersInputObjectSchema } from './categoriesUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => categoriesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => categoriesCreateWithoutUsersInputObjectSchema),
      z.lazy(() => categoriesUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const categoriesCreateOrConnectWithoutUsersInputObjectSchema = Schema;
