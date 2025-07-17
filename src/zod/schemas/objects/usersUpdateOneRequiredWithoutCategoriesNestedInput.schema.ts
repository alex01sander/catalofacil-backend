import { z } from 'zod';
import { usersCreateWithoutCategoriesInputObjectSchema } from './usersCreateWithoutCategoriesInput.schema';
import { usersUncheckedCreateWithoutCategoriesInputObjectSchema } from './usersUncheckedCreateWithoutCategoriesInput.schema';
import { usersCreateOrConnectWithoutCategoriesInputObjectSchema } from './usersCreateOrConnectWithoutCategoriesInput.schema';
import { usersUpsertWithoutCategoriesInputObjectSchema } from './usersUpsertWithoutCategoriesInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutCategoriesInputObjectSchema } from './usersUpdateWithoutCategoriesInput.schema';
import { usersUncheckedUpdateWithoutCategoriesInputObjectSchema } from './usersUncheckedUpdateWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutCategoriesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => usersCreateWithoutCategoriesInputObjectSchema),
          z.lazy(() => usersUncheckedCreateWithoutCategoriesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => usersCreateOrConnectWithoutCategoriesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => usersUpsertWithoutCategoriesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => usersUpdateWithoutCategoriesInputObjectSchema),
          z.lazy(() => usersUncheckedUpdateWithoutCategoriesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const usersUpdateOneRequiredWithoutCategoriesNestedInputObjectSchema =
  Schema;
