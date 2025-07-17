import { z } from 'zod';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutCategoriesInputObjectSchema } from './usersCreateWithoutCategoriesInput.schema';
import { usersUncheckedCreateWithoutCategoriesInputObjectSchema } from './usersUncheckedCreateWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateOrConnectWithoutCategoriesInput> = z
  .object({
    where: z.lazy(() => usersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => usersCreateWithoutCategoriesInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutCategoriesInputObjectSchema),
    ]),
  })
  .strict();

export const usersCreateOrConnectWithoutCategoriesInputObjectSchema = Schema;
