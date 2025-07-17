import { z } from 'zod';
import { usersUpdateWithoutOne_time_tokensInputObjectSchema } from './usersUpdateWithoutOne_time_tokensInput.schema';
import { usersUncheckedUpdateWithoutOne_time_tokensInputObjectSchema } from './usersUncheckedUpdateWithoutOne_time_tokensInput.schema';
import { usersCreateWithoutOne_time_tokensInputObjectSchema } from './usersCreateWithoutOne_time_tokensInput.schema';
import { usersUncheckedCreateWithoutOne_time_tokensInputObjectSchema } from './usersUncheckedCreateWithoutOne_time_tokensInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpsertWithoutOne_time_tokensInput> = z
  .object({
    update: z.union([
      z.lazy(() => usersUpdateWithoutOne_time_tokensInputObjectSchema),
      z.lazy(() => usersUncheckedUpdateWithoutOne_time_tokensInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => usersCreateWithoutOne_time_tokensInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutOne_time_tokensInputObjectSchema),
    ]),
  })
  .strict();

export const usersUpsertWithoutOne_time_tokensInputObjectSchema = Schema;
