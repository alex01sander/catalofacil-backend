import { z } from 'zod';
import { usersCreateWithoutStore_settingsInputObjectSchema } from './usersCreateWithoutStore_settingsInput.schema';
import { usersUncheckedCreateWithoutStore_settingsInputObjectSchema } from './usersUncheckedCreateWithoutStore_settingsInput.schema';
import { usersCreateOrConnectWithoutStore_settingsInputObjectSchema } from './usersCreateOrConnectWithoutStore_settingsInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateNestedOneWithoutStore_settingsInput> =
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
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const usersCreateNestedOneWithoutStore_settingsInputObjectSchema =
  Schema;
