import { z } from 'zod';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutStore_settingsInputObjectSchema } from './usersCreateWithoutStore_settingsInput.schema';
import { usersUncheckedCreateWithoutStore_settingsInputObjectSchema } from './usersUncheckedCreateWithoutStore_settingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateOrConnectWithoutStore_settingsInput> =
  z
    .object({
      where: z.lazy(() => usersWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => usersCreateWithoutStore_settingsInputObjectSchema),
        z.lazy(
          () => usersUncheckedCreateWithoutStore_settingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const usersCreateOrConnectWithoutStore_settingsInputObjectSchema =
  Schema;
