import { z } from 'zod';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';
import { storesCreateWithoutCategoriesInputObjectSchema } from './storesCreateWithoutCategoriesInput.schema';
import { storesUncheckedCreateWithoutCategoriesInputObjectSchema } from './storesUncheckedCreateWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesCreateOrConnectWithoutCategoriesInput> = z
  .object({
    where: z.lazy(() => storesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => storesCreateWithoutCategoriesInputObjectSchema),
      z.lazy(() => storesUncheckedCreateWithoutCategoriesInputObjectSchema),
    ]),
  })
  .strict();

export const storesCreateOrConnectWithoutCategoriesInputObjectSchema = Schema;
