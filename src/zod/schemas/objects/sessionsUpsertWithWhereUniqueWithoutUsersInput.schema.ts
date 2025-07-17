import { z } from 'zod';
import { sessionsWhereUniqueInputObjectSchema } from './sessionsWhereUniqueInput.schema';
import { sessionsUpdateWithoutUsersInputObjectSchema } from './sessionsUpdateWithoutUsersInput.schema';
import { sessionsUncheckedUpdateWithoutUsersInputObjectSchema } from './sessionsUncheckedUpdateWithoutUsersInput.schema';
import { sessionsCreateWithoutUsersInputObjectSchema } from './sessionsCreateWithoutUsersInput.schema';
import { sessionsUncheckedCreateWithoutUsersInputObjectSchema } from './sessionsUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsUpsertWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => sessionsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => sessionsUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => sessionsUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => sessionsCreateWithoutUsersInputObjectSchema),
        z.lazy(() => sessionsUncheckedCreateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const sessionsUpsertWithWhereUniqueWithoutUsersInputObjectSchema =
  Schema;
