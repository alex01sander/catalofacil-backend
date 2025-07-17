import { z } from 'zod';
import { store_settingsCreateWithoutUsersInputObjectSchema } from './store_settingsCreateWithoutUsersInput.schema';
import { store_settingsUncheckedCreateWithoutUsersInputObjectSchema } from './store_settingsUncheckedCreateWithoutUsersInput.schema';
import { store_settingsCreateOrConnectWithoutUsersInputObjectSchema } from './store_settingsCreateOrConnectWithoutUsersInput.schema';
import { store_settingsWhereUniqueInputObjectSchema } from './store_settingsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.store_settingsUncheckedCreateNestedOneWithoutUsersInput> =
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
      connect: z
        .lazy(() => store_settingsWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const store_settingsUncheckedCreateNestedOneWithoutUsersInputObjectSchema =
  Schema;
