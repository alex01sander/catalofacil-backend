import { z } from 'zod';
import { usersCreateWithoutSessionsInputObjectSchema } from './usersCreateWithoutSessionsInput.schema';
import { usersUncheckedCreateWithoutSessionsInputObjectSchema } from './usersUncheckedCreateWithoutSessionsInput.schema';
import { usersCreateOrConnectWithoutSessionsInputObjectSchema } from './usersCreateOrConnectWithoutSessionsInput.schema';
import { usersUpsertWithoutSessionsInputObjectSchema } from './usersUpsertWithoutSessionsInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutSessionsInputObjectSchema } from './usersUpdateWithoutSessionsInput.schema';
import { usersUncheckedUpdateWithoutSessionsInputObjectSchema } from './usersUncheckedUpdateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutSessionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => usersCreateWithoutSessionsInputObjectSchema),
          z.lazy(() => usersUncheckedCreateWithoutSessionsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => usersCreateOrConnectWithoutSessionsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => usersUpsertWithoutSessionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => usersUpdateWithoutSessionsInputObjectSchema),
          z.lazy(() => usersUncheckedUpdateWithoutSessionsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const usersUpdateOneRequiredWithoutSessionsNestedInputObjectSchema =
  Schema;
