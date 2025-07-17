import { z } from 'zod';
import { sessionsWhereUniqueInputObjectSchema } from './sessionsWhereUniqueInput.schema';
import { sessionsCreateWithoutUsersInputObjectSchema } from './sessionsCreateWithoutUsersInput.schema';
import { sessionsUncheckedCreateWithoutUsersInputObjectSchema } from './sessionsUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => sessionsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => sessionsCreateWithoutUsersInputObjectSchema),
      z.lazy(() => sessionsUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const sessionsCreateOrConnectWithoutUsersInputObjectSchema = Schema;
