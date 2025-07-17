import { z } from 'zod';
import { refresh_tokensCreateWithoutSessionsInputObjectSchema } from './refresh_tokensCreateWithoutSessionsInput.schema';
import { refresh_tokensUncheckedCreateWithoutSessionsInputObjectSchema } from './refresh_tokensUncheckedCreateWithoutSessionsInput.schema';
import { refresh_tokensCreateOrConnectWithoutSessionsInputObjectSchema } from './refresh_tokensCreateOrConnectWithoutSessionsInput.schema';
import { refresh_tokensCreateManySessionsInputEnvelopeObjectSchema } from './refresh_tokensCreateManySessionsInputEnvelope.schema';
import { refresh_tokensWhereUniqueInputObjectSchema } from './refresh_tokensWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.refresh_tokensUncheckedCreateNestedManyWithoutSessionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => refresh_tokensCreateWithoutSessionsInputObjectSchema),
          z
            .lazy(() => refresh_tokensCreateWithoutSessionsInputObjectSchema)
            .array(),
          z.lazy(
            () => refresh_tokensUncheckedCreateWithoutSessionsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                refresh_tokensUncheckedCreateWithoutSessionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => refresh_tokensCreateOrConnectWithoutSessionsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                refresh_tokensCreateOrConnectWithoutSessionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => refresh_tokensCreateManySessionsInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => refresh_tokensWhereUniqueInputObjectSchema),
          z.lazy(() => refresh_tokensWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const refresh_tokensUncheckedCreateNestedManyWithoutSessionsInputObjectSchema =
  Schema;
