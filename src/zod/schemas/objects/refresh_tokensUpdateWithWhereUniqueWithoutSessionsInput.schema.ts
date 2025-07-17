import { z } from 'zod';
import { refresh_tokensWhereUniqueInputObjectSchema } from './refresh_tokensWhereUniqueInput.schema';
import { refresh_tokensUpdateWithoutSessionsInputObjectSchema } from './refresh_tokensUpdateWithoutSessionsInput.schema';
import { refresh_tokensUncheckedUpdateWithoutSessionsInputObjectSchema } from './refresh_tokensUncheckedUpdateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.refresh_tokensUpdateWithWhereUniqueWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => refresh_tokensWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => refresh_tokensUpdateWithoutSessionsInputObjectSchema),
        z.lazy(
          () => refresh_tokensUncheckedUpdateWithoutSessionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const refresh_tokensUpdateWithWhereUniqueWithoutSessionsInputObjectSchema =
  Schema;
