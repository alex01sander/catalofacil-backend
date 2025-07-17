import { z } from 'zod';
import { usersCreateWithoutOne_time_tokensInputObjectSchema } from './usersCreateWithoutOne_time_tokensInput.schema';
import { usersUncheckedCreateWithoutOne_time_tokensInputObjectSchema } from './usersUncheckedCreateWithoutOne_time_tokensInput.schema';
import { usersCreateOrConnectWithoutOne_time_tokensInputObjectSchema } from './usersCreateOrConnectWithoutOne_time_tokensInput.schema';
import { usersUpsertWithoutOne_time_tokensInputObjectSchema } from './usersUpsertWithoutOne_time_tokensInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutOne_time_tokensInputObjectSchema } from './usersUpdateWithoutOne_time_tokensInput.schema';
import { usersUncheckedUpdateWithoutOne_time_tokensInputObjectSchema } from './usersUncheckedUpdateWithoutOne_time_tokensInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutOne_time_tokensNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => usersCreateWithoutOne_time_tokensInputObjectSchema),
          z.lazy(
            () => usersUncheckedCreateWithoutOne_time_tokensInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => usersCreateOrConnectWithoutOne_time_tokensInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => usersUpsertWithoutOne_time_tokensInputObjectSchema)
        .optional(),
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => usersUpdateWithoutOne_time_tokensInputObjectSchema),
          z.lazy(
            () => usersUncheckedUpdateWithoutOne_time_tokensInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const usersUpdateOneRequiredWithoutOne_time_tokensNestedInputObjectSchema =
  Schema;
