import { z } from 'zod';
import { sessionsWhereUniqueInputObjectSchema } from './sessionsWhereUniqueInput.schema';
import { sessionsUpdateWithoutUsersInputObjectSchema } from './sessionsUpdateWithoutUsersInput.schema';
import { sessionsUncheckedUpdateWithoutUsersInputObjectSchema } from './sessionsUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsUpdateWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => sessionsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => sessionsUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => sessionsUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const sessionsUpdateWithWhereUniqueWithoutUsersInputObjectSchema =
  Schema;
