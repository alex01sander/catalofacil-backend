import { z } from 'zod';
import { usersCreateWithoutIdentitiesInputObjectSchema } from './usersCreateWithoutIdentitiesInput.schema';
import { usersUncheckedCreateWithoutIdentitiesInputObjectSchema } from './usersUncheckedCreateWithoutIdentitiesInput.schema';
import { usersCreateOrConnectWithoutIdentitiesInputObjectSchema } from './usersCreateOrConnectWithoutIdentitiesInput.schema';
import { usersUpsertWithoutIdentitiesInputObjectSchema } from './usersUpsertWithoutIdentitiesInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutIdentitiesInputObjectSchema } from './usersUpdateWithoutIdentitiesInput.schema';
import { usersUncheckedUpdateWithoutIdentitiesInputObjectSchema } from './usersUncheckedUpdateWithoutIdentitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutIdentitiesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => usersCreateWithoutIdentitiesInputObjectSchema),
          z.lazy(() => usersUncheckedCreateWithoutIdentitiesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => usersCreateOrConnectWithoutIdentitiesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => usersUpsertWithoutIdentitiesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => usersUpdateWithoutIdentitiesInputObjectSchema),
          z.lazy(() => usersUncheckedUpdateWithoutIdentitiesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const usersUpdateOneRequiredWithoutIdentitiesNestedInputObjectSchema =
  Schema;
