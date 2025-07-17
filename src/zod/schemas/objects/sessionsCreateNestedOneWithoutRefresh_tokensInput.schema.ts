import { z } from 'zod';
import { sessionsCreateWithoutRefresh_tokensInputObjectSchema } from './sessionsCreateWithoutRefresh_tokensInput.schema';
import { sessionsUncheckedCreateWithoutRefresh_tokensInputObjectSchema } from './sessionsUncheckedCreateWithoutRefresh_tokensInput.schema';
import { sessionsCreateOrConnectWithoutRefresh_tokensInputObjectSchema } from './sessionsCreateOrConnectWithoutRefresh_tokensInput.schema';
import { sessionsWhereUniqueInputObjectSchema } from './sessionsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsCreateNestedOneWithoutRefresh_tokensInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => sessionsCreateWithoutRefresh_tokensInputObjectSchema),
          z.lazy(
            () => sessionsUncheckedCreateWithoutRefresh_tokensInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => sessionsCreateOrConnectWithoutRefresh_tokensInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => sessionsWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const sessionsCreateNestedOneWithoutRefresh_tokensInputObjectSchema =
  Schema;
