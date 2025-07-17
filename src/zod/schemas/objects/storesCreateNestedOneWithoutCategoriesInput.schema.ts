import { z } from 'zod';
import { storesCreateWithoutCategoriesInputObjectSchema } from './storesCreateWithoutCategoriesInput.schema';
import { storesUncheckedCreateWithoutCategoriesInputObjectSchema } from './storesUncheckedCreateWithoutCategoriesInput.schema';
import { storesCreateOrConnectWithoutCategoriesInputObjectSchema } from './storesCreateOrConnectWithoutCategoriesInput.schema';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesCreateNestedOneWithoutCategoriesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => storesCreateWithoutCategoriesInputObjectSchema),
        z.lazy(() => storesUncheckedCreateWithoutCategoriesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => storesCreateOrConnectWithoutCategoriesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => storesWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const storesCreateNestedOneWithoutCategoriesInputObjectSchema = Schema;
