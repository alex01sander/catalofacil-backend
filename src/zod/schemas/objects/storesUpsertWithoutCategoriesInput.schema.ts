import { z } from 'zod';
import { storesUpdateWithoutCategoriesInputObjectSchema } from './storesUpdateWithoutCategoriesInput.schema';
import { storesUncheckedUpdateWithoutCategoriesInputObjectSchema } from './storesUncheckedUpdateWithoutCategoriesInput.schema';
import { storesCreateWithoutCategoriesInputObjectSchema } from './storesCreateWithoutCategoriesInput.schema';
import { storesUncheckedCreateWithoutCategoriesInputObjectSchema } from './storesUncheckedCreateWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUpsertWithoutCategoriesInput> = z
  .object({
    update: z.union([
      z.lazy(() => storesUpdateWithoutCategoriesInputObjectSchema),
      z.lazy(() => storesUncheckedUpdateWithoutCategoriesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => storesCreateWithoutCategoriesInputObjectSchema),
      z.lazy(() => storesUncheckedCreateWithoutCategoriesInputObjectSchema),
    ]),
  })
  .strict();

export const storesUpsertWithoutCategoriesInputObjectSchema = Schema;
