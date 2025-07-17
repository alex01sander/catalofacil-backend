import { z } from 'zod';
import { refresh_tokensWhereUniqueInputObjectSchema } from './refresh_tokensWhereUniqueInput.schema';
import { refresh_tokensUpdateWithoutSessionsInputObjectSchema } from './refresh_tokensUpdateWithoutSessionsInput.schema';
import { refresh_tokensUncheckedUpdateWithoutSessionsInputObjectSchema } from './refresh_tokensUncheckedUpdateWithoutSessionsInput.schema';
import { refresh_tokensCreateWithoutSessionsInputObjectSchema } from './refresh_tokensCreateWithoutSessionsInput.schema';
import { refresh_tokensUncheckedCreateWithoutSessionsInputObjectSchema } from './refresh_tokensUncheckedCreateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.refresh_tokensUpsertWithWhereUniqueWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => refresh_tokensWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => refresh_tokensUpdateWithoutSessionsInputObjectSchema),
        z.lazy(
          () => refresh_tokensUncheckedUpdateWithoutSessionsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => refresh_tokensCreateWithoutSessionsInputObjectSchema),
        z.lazy(
          () => refresh_tokensUncheckedCreateWithoutSessionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const refresh_tokensUpsertWithWhereUniqueWithoutSessionsInputObjectSchema =
  Schema;
