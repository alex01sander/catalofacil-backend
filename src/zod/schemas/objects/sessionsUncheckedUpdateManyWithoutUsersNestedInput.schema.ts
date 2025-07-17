import { z } from 'zod';
import { sessionsCreateWithoutUsersInputObjectSchema } from './sessionsCreateWithoutUsersInput.schema';
import { sessionsUncheckedCreateWithoutUsersInputObjectSchema } from './sessionsUncheckedCreateWithoutUsersInput.schema';
import { sessionsCreateOrConnectWithoutUsersInputObjectSchema } from './sessionsCreateOrConnectWithoutUsersInput.schema';
import { sessionsUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './sessionsUpsertWithWhereUniqueWithoutUsersInput.schema';
import { sessionsCreateManyUsersInputEnvelopeObjectSchema } from './sessionsCreateManyUsersInputEnvelope.schema';
import { sessionsWhereUniqueInputObjectSchema } from './sessionsWhereUniqueInput.schema';
import { sessionsUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './sessionsUpdateWithWhereUniqueWithoutUsersInput.schema';
import { sessionsUpdateManyWithWhereWithoutUsersInputObjectSchema } from './sessionsUpdateManyWithWhereWithoutUsersInput.schema';
import { sessionsScalarWhereInputObjectSchema } from './sessionsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsUncheckedUpdateManyWithoutUsersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => sessionsCreateWithoutUsersInputObjectSchema),
          z.lazy(() => sessionsCreateWithoutUsersInputObjectSchema).array(),
          z.lazy(() => sessionsUncheckedCreateWithoutUsersInputObjectSchema),
          z
            .lazy(() => sessionsUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => sessionsCreateOrConnectWithoutUsersInputObjectSchema),
          z
            .lazy(() => sessionsCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => sessionsUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () => sessionsUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => sessionsCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => sessionsWhereUniqueInputObjectSchema),
          z.lazy(() => sessionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => sessionsWhereUniqueInputObjectSchema),
          z.lazy(() => sessionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => sessionsWhereUniqueInputObjectSchema),
          z.lazy(() => sessionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => sessionsWhereUniqueInputObjectSchema),
          z.lazy(() => sessionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => sessionsUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () => sessionsUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => sessionsUpdateManyWithWhereWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () => sessionsUpdateManyWithWhereWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => sessionsScalarWhereInputObjectSchema),
          z.lazy(() => sessionsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const sessionsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema =
  Schema;
