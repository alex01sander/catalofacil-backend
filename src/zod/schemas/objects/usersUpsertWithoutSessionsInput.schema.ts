import { z } from 'zod';
import { usersUpdateWithoutSessionsInputObjectSchema } from './usersUpdateWithoutSessionsInput.schema';
import { usersUncheckedUpdateWithoutSessionsInputObjectSchema } from './usersUncheckedUpdateWithoutSessionsInput.schema';
import { usersCreateWithoutSessionsInputObjectSchema } from './usersCreateWithoutSessionsInput.schema';
import { usersUncheckedCreateWithoutSessionsInputObjectSchema } from './usersUncheckedCreateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpsertWithoutSessionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => usersUpdateWithoutSessionsInputObjectSchema),
      z.lazy(() => usersUncheckedUpdateWithoutSessionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => usersCreateWithoutSessionsInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict();

export const usersUpsertWithoutSessionsInputObjectSchema = Schema;
