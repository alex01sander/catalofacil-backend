import { z } from 'zod';
import { usersCreateWithoutOne_time_tokensInputObjectSchema } from './usersCreateWithoutOne_time_tokensInput.schema';
import { usersUncheckedCreateWithoutOne_time_tokensInputObjectSchema } from './usersUncheckedCreateWithoutOne_time_tokensInput.schema';
import { usersCreateOrConnectWithoutOne_time_tokensInputObjectSchema } from './usersCreateOrConnectWithoutOne_time_tokensInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateNestedOneWithoutOne_time_tokensInput> =
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
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const usersCreateNestedOneWithoutOne_time_tokensInputObjectSchema =
  Schema;
