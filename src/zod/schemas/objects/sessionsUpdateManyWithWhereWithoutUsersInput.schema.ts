import { z } from 'zod';
import { sessionsScalarWhereInputObjectSchema } from './sessionsScalarWhereInput.schema';
import { sessionsUpdateManyMutationInputObjectSchema } from './sessionsUpdateManyMutationInput.schema';
import { sessionsUncheckedUpdateManyWithoutSessionsInputObjectSchema } from './sessionsUncheckedUpdateManyWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsUpdateManyWithWhereWithoutUsersInput> = z
  .object({
    where: z.lazy(() => sessionsScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => sessionsUpdateManyMutationInputObjectSchema),
      z.lazy(() => sessionsUncheckedUpdateManyWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict();

export const sessionsUpdateManyWithWhereWithoutUsersInputObjectSchema = Schema;
