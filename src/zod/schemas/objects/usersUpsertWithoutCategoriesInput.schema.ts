import { z } from 'zod';
import { usersUpdateWithoutCategoriesInputObjectSchema } from './usersUpdateWithoutCategoriesInput.schema';
import { usersUncheckedUpdateWithoutCategoriesInputObjectSchema } from './usersUncheckedUpdateWithoutCategoriesInput.schema';
import { usersCreateWithoutCategoriesInputObjectSchema } from './usersCreateWithoutCategoriesInput.schema';
import { usersUncheckedCreateWithoutCategoriesInputObjectSchema } from './usersUncheckedCreateWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpsertWithoutCategoriesInput> = z
  .object({
    update: z.union([
      z.lazy(() => usersUpdateWithoutCategoriesInputObjectSchema),
      z.lazy(() => usersUncheckedUpdateWithoutCategoriesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => usersCreateWithoutCategoriesInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutCategoriesInputObjectSchema),
    ]),
  })
  .strict();

export const usersUpsertWithoutCategoriesInputObjectSchema = Schema;
