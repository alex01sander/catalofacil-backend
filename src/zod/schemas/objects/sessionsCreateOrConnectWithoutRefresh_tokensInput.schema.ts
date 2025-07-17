import { z } from 'zod';
import { sessionsWhereUniqueInputObjectSchema } from './sessionsWhereUniqueInput.schema';
import { sessionsCreateWithoutRefresh_tokensInputObjectSchema } from './sessionsCreateWithoutRefresh_tokensInput.schema';
import { sessionsUncheckedCreateWithoutRefresh_tokensInputObjectSchema } from './sessionsUncheckedCreateWithoutRefresh_tokensInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsCreateOrConnectWithoutRefresh_tokensInput> =
  z
    .object({
      where: z.lazy(() => sessionsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => sessionsCreateWithoutRefresh_tokensInputObjectSchema),
        z.lazy(
          () => sessionsUncheckedCreateWithoutRefresh_tokensInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const sessionsCreateOrConnectWithoutRefresh_tokensInputObjectSchema =
  Schema;
