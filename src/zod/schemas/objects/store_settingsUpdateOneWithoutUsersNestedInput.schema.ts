import { z } from 'zod';
import { store_settingsCreateWithoutUsersInputObjectSchema } from './store_settingsCreateWithoutUsersInput.schema';
import { store_settingsUncheckedCreateWithoutUsersInputObjectSchema } from './store_settingsUncheckedCreateWithoutUsersInput.schema';
import { store_settingsCreateOrConnectWithoutUsersInputObjectSchema } from './store_settingsCreateOrConnectWithoutUsersInput.schema';
import { store_settingsUpsertWithoutUsersInputObjectSchema } from './store_settingsUpsertWithoutUsersInput.schema';
import { store_settingsWhereUniqueInputObjectSchema } from './store_settingsWhereUniqueInput.schema';
import { store_settingsUpdateWithoutUsersInputObjectSchema } from './store_settingsUpdateWithoutUsersInput.schema';
import { store_settingsUncheckedUpdateWithoutUsersInputObjectSchema } from './store_settingsUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.store_settingsUpdateOneWithoutUsersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => store_settingsCreateWithoutUsersInputObjectSchema),
          z.lazy(
            () => store_settingsUncheckedCreateWithoutUsersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => store_settingsCreateOrConnectWithoutUsersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => store_settingsUpsertWithoutUsersInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => store_settingsWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => store_settingsUpdateWithoutUsersInputObjectSchema),
          z.lazy(
            () => store_settingsUncheckedUpdateWithoutUsersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const store_settingsUpdateOneWithoutUsersNestedInputObjectSchema =
  Schema;
