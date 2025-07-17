import { z } from 'zod';
import { storesCreateWithoutCategoriesInputObjectSchema } from './storesCreateWithoutCategoriesInput.schema';
import { storesUncheckedCreateWithoutCategoriesInputObjectSchema } from './storesUncheckedCreateWithoutCategoriesInput.schema';
import { storesCreateOrConnectWithoutCategoriesInputObjectSchema } from './storesCreateOrConnectWithoutCategoriesInput.schema';
import { storesUpsertWithoutCategoriesInputObjectSchema } from './storesUpsertWithoutCategoriesInput.schema';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';
import { storesUpdateWithoutCategoriesInputObjectSchema } from './storesUpdateWithoutCategoriesInput.schema';
import { storesUncheckedUpdateWithoutCategoriesInputObjectSchema } from './storesUncheckedUpdateWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUpdateOneWithoutCategoriesNestedInput> = z
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
    upsert: z
      .lazy(() => storesUpsertWithoutCategoriesInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => storesWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => storesUpdateWithoutCategoriesInputObjectSchema),
        z.lazy(() => storesUncheckedUpdateWithoutCategoriesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const storesUpdateOneWithoutCategoriesNestedInputObjectSchema = Schema;
