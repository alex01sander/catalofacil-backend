import { z } from 'zod';
import { refresh_tokensWhereUniqueInputObjectSchema } from './refresh_tokensWhereUniqueInput.schema';
import { refresh_tokensCreateWithoutSessionsInputObjectSchema } from './refresh_tokensCreateWithoutSessionsInput.schema';
import { refresh_tokensUncheckedCreateWithoutSessionsInputObjectSchema } from './refresh_tokensUncheckedCreateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.refresh_tokensCreateOrConnectWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => refresh_tokensWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => refresh_tokensCreateWithoutSessionsInputObjectSchema),
        z.lazy(
          () => refresh_tokensUncheckedCreateWithoutSessionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const refresh_tokensCreateOrConnectWithoutSessionsInputObjectSchema =
  Schema;
