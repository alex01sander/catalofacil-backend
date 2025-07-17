import { z } from 'zod';
import { usersCreateWithoutStoresInputObjectSchema } from './usersCreateWithoutStoresInput.schema';
import { usersUncheckedCreateWithoutStoresInputObjectSchema } from './usersUncheckedCreateWithoutStoresInput.schema';
import { usersCreateOrConnectWithoutStoresInputObjectSchema } from './usersCreateOrConnectWithoutStoresInput.schema';
import { usersUpsertWithoutStoresInputObjectSchema } from './usersUpsertWithoutStoresInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutStoresInputObjectSchema } from './usersUpdateWithoutStoresInput.schema';
import { usersUncheckedUpdateWithoutStoresInputObjectSchema } from './usersUncheckedUpdateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutStoresNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => usersCreateWithoutStoresInputObjectSchema),
          z.lazy(() => usersUncheckedCreateWithoutStoresInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => usersCreateOrConnectWithoutStoresInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => usersUpsertWithoutStoresInputObjectSchema)
        .optional(),
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => usersUpdateWithoutStoresInputObjectSchema),
          z.lazy(() => usersUncheckedUpdateWithoutStoresInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const usersUpdateOneRequiredWithoutStoresNestedInputObjectSchema =
  Schema;
