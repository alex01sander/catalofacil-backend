import { z } from 'zod';
import { refresh_tokensCreateWithoutSessionsInputObjectSchema } from './refresh_tokensCreateWithoutSessionsInput.schema';
import { refresh_tokensUncheckedCreateWithoutSessionsInputObjectSchema } from './refresh_tokensUncheckedCreateWithoutSessionsInput.schema';
import { refresh_tokensCreateOrConnectWithoutSessionsInputObjectSchema } from './refresh_tokensCreateOrConnectWithoutSessionsInput.schema';
import { refresh_tokensUpsertWithWhereUniqueWithoutSessionsInputObjectSchema } from './refresh_tokensUpsertWithWhereUniqueWithoutSessionsInput.schema';
import { refresh_tokensCreateManySessionsInputEnvelopeObjectSchema } from './refresh_tokensCreateManySessionsInputEnvelope.schema';
import { refresh_tokensWhereUniqueInputObjectSchema } from './refresh_tokensWhereUniqueInput.schema';
import { refresh_tokensUpdateWithWhereUniqueWithoutSessionsInputObjectSchema } from './refresh_tokensUpdateWithWhereUniqueWithoutSessionsInput.schema';
import { refresh_tokensUpdateManyWithWhereWithoutSessionsInputObjectSchema } from './refresh_tokensUpdateManyWithWhereWithoutSessionsInput.schema';
import { refresh_tokensScalarWhereInputObjectSchema } from './refresh_tokensScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.refresh_tokensUncheckedUpdateManyWithoutSessionsNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              refresh_tokensUpsertWithWhereUniqueWithoutSessionsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                refresh_tokensUpsertWithWhereUniqueWithoutSessionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => refresh_tokensCreateManySessionsInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => refresh_tokensWhereUniqueInputObjectSchema),
          z.lazy(() => refresh_tokensWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => refresh_tokensWhereUniqueInputObjectSchema),
          z.lazy(() => refresh_tokensWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => refresh_tokensWhereUniqueInputObjectSchema),
          z.lazy(() => refresh_tokensWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => refresh_tokensWhereUniqueInputObjectSchema),
          z.lazy(() => refresh_tokensWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              refresh_tokensUpdateWithWhereUniqueWithoutSessionsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                refresh_tokensUpdateWithWhereUniqueWithoutSessionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              refresh_tokensUpdateManyWithWhereWithoutSessionsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                refresh_tokensUpdateManyWithWhereWithoutSessionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => refresh_tokensScalarWhereInputObjectSchema),
          z.lazy(() => refresh_tokensScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const refresh_tokensUncheckedUpdateManyWithoutSessionsNestedInputObjectSchema =
  Schema;
