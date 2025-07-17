import { z } from 'zod';
import { sessionsUpdateWithoutRefresh_tokensInputObjectSchema } from './sessionsUpdateWithoutRefresh_tokensInput.schema';
import { sessionsUncheckedUpdateWithoutRefresh_tokensInputObjectSchema } from './sessionsUncheckedUpdateWithoutRefresh_tokensInput.schema';
import { sessionsCreateWithoutRefresh_tokensInputObjectSchema } from './sessionsCreateWithoutRefresh_tokensInput.schema';
import { sessionsUncheckedCreateWithoutRefresh_tokensInputObjectSchema } from './sessionsUncheckedCreateWithoutRefresh_tokensInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsUpsertWithoutRefresh_tokensInput> = z
  .object({
    update: z.union([
      z.lazy(() => sessionsUpdateWithoutRefresh_tokensInputObjectSchema),
      z.lazy(
        () => sessionsUncheckedUpdateWithoutRefresh_tokensInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => sessionsCreateWithoutRefresh_tokensInputObjectSchema),
      z.lazy(
        () => sessionsUncheckedCreateWithoutRefresh_tokensInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const sessionsUpsertWithoutRefresh_tokensInputObjectSchema = Schema;
