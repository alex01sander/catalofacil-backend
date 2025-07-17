import { z } from 'zod';
import { one_time_tokensCreateWithoutUsersInputObjectSchema } from './one_time_tokensCreateWithoutUsersInput.schema';
import { one_time_tokensUncheckedCreateWithoutUsersInputObjectSchema } from './one_time_tokensUncheckedCreateWithoutUsersInput.schema';
import { one_time_tokensCreateOrConnectWithoutUsersInputObjectSchema } from './one_time_tokensCreateOrConnectWithoutUsersInput.schema';
import { one_time_tokensUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './one_time_tokensUpsertWithWhereUniqueWithoutUsersInput.schema';
import { one_time_tokensCreateManyUsersInputEnvelopeObjectSchema } from './one_time_tokensCreateManyUsersInputEnvelope.schema';
import { one_time_tokensWhereUniqueInputObjectSchema } from './one_time_tokensWhereUniqueInput.schema';
import { one_time_tokensUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './one_time_tokensUpdateWithWhereUniqueWithoutUsersInput.schema';
import { one_time_tokensUpdateManyWithWhereWithoutUsersInputObjectSchema } from './one_time_tokensUpdateManyWithWhereWithoutUsersInput.schema';
import { one_time_tokensScalarWhereInputObjectSchema } from './one_time_tokensScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensUncheckedUpdateManyWithoutUsersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => one_time_tokensCreateWithoutUsersInputObjectSchema),
          z
            .lazy(() => one_time_tokensCreateWithoutUsersInputObjectSchema)
            .array(),
          z.lazy(
            () => one_time_tokensUncheckedCreateWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () => one_time_tokensUncheckedCreateWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => one_time_tokensCreateOrConnectWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () => one_time_tokensCreateOrConnectWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              one_time_tokensUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                one_time_tokensUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => one_time_tokensCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => one_time_tokensWhereUniqueInputObjectSchema),
          z.lazy(() => one_time_tokensWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => one_time_tokensWhereUniqueInputObjectSchema),
          z.lazy(() => one_time_tokensWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => one_time_tokensWhereUniqueInputObjectSchema),
          z.lazy(() => one_time_tokensWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => one_time_tokensWhereUniqueInputObjectSchema),
          z.lazy(() => one_time_tokensWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              one_time_tokensUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                one_time_tokensUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              one_time_tokensUpdateManyWithWhereWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                one_time_tokensUpdateManyWithWhereWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => one_time_tokensScalarWhereInputObjectSchema),
          z.lazy(() => one_time_tokensScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const one_time_tokensUncheckedUpdateManyWithoutUsersNestedInputObjectSchema =
  Schema;
