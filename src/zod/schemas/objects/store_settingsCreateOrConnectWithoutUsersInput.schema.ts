import { z } from 'zod';
import { store_settingsWhereUniqueInputObjectSchema } from './store_settingsWhereUniqueInput.schema';
import { store_settingsCreateWithoutUsersInputObjectSchema } from './store_settingsCreateWithoutUsersInput.schema';
import { store_settingsUncheckedCreateWithoutUsersInputObjectSchema } from './store_settingsUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.store_settingsCreateOrConnectWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => store_settingsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => store_settingsCreateWithoutUsersInputObjectSchema),
        z.lazy(
          () => store_settingsUncheckedCreateWithoutUsersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const store_settingsCreateOrConnectWithoutUsersInputObjectSchema =
  Schema;
