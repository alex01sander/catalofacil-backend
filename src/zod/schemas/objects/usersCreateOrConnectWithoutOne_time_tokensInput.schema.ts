import { z } from 'zod';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutOne_time_tokensInputObjectSchema } from './usersCreateWithoutOne_time_tokensInput.schema';
import { usersUncheckedCreateWithoutOne_time_tokensInputObjectSchema } from './usersUncheckedCreateWithoutOne_time_tokensInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateOrConnectWithoutOne_time_tokensInput> =
  z
    .object({
      where: z.lazy(() => usersWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => usersCreateWithoutOne_time_tokensInputObjectSchema),
        z.lazy(
          () => usersUncheckedCreateWithoutOne_time_tokensInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const usersCreateOrConnectWithoutOne_time_tokensInputObjectSchema =
  Schema;
