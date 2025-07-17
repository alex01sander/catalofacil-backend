import { z } from 'zod';
import { sessionsCreateWithoutRefresh_tokensInputObjectSchema } from './sessionsCreateWithoutRefresh_tokensInput.schema';
import { sessionsUncheckedCreateWithoutRefresh_tokensInputObjectSchema } from './sessionsUncheckedCreateWithoutRefresh_tokensInput.schema';
import { sessionsCreateOrConnectWithoutRefresh_tokensInputObjectSchema } from './sessionsCreateOrConnectWithoutRefresh_tokensInput.schema';
import { sessionsUpsertWithoutRefresh_tokensInputObjectSchema } from './sessionsUpsertWithoutRefresh_tokensInput.schema';
import { sessionsWhereUniqueInputObjectSchema } from './sessionsWhereUniqueInput.schema';
import { sessionsUpdateWithoutRefresh_tokensInputObjectSchema } from './sessionsUpdateWithoutRefresh_tokensInput.schema';
import { sessionsUncheckedUpdateWithoutRefresh_tokensInputObjectSchema } from './sessionsUncheckedUpdateWithoutRefresh_tokensInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsUpdateOneWithoutRefresh_tokensNestedInput> =
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
      upsert: z
        .lazy(() => sessionsUpsertWithoutRefresh_tokensInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => sessionsWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => sessionsUpdateWithoutRefresh_tokensInputObjectSchema),
          z.lazy(
            () => sessionsUncheckedUpdateWithoutRefresh_tokensInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const sessionsUpdateOneWithoutRefresh_tokensNestedInputObjectSchema =
  Schema;
