import { z } from 'zod';
import { usersCreateWithoutStore_settingsInputObjectSchema } from './usersCreateWithoutStore_settingsInput.schema';
import { usersUncheckedCreateWithoutStore_settingsInputObjectSchema } from './usersUncheckedCreateWithoutStore_settingsInput.schema';
import { usersCreateOrConnectWithoutStore_settingsInputObjectSchema } from './usersCreateOrConnectWithoutStore_settingsInput.schema';
import { usersUpsertWithoutStore_settingsInputObjectSchema } from './usersUpsertWithoutStore_settingsInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutStore_settingsInputObjectSchema } from './usersUpdateWithoutStore_settingsInput.schema';
import { usersUncheckedUpdateWithoutStore_settingsInputObjectSchema } from './usersUncheckedUpdateWithoutStore_settingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutStore_settingsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => usersCreateWithoutStore_settingsInputObjectSchema),
          z.lazy(
            () => usersUncheckedCreateWithoutStore_settingsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => usersCreateOrConnectWithoutStore_settingsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => usersUpsertWithoutStore_settingsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => usersUpdateWithoutStore_settingsInputObjectSchema),
          z.lazy(
            () => usersUncheckedUpdateWithoutStore_settingsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const usersUpdateOneRequiredWithoutStore_settingsNestedInputObjectSchema =
  Schema;
