import { z } from 'zod';
import { mfa_challengesCreateWithoutMfa_factorsInputObjectSchema } from './mfa_challengesCreateWithoutMfa_factorsInput.schema';
import { mfa_challengesUncheckedCreateWithoutMfa_factorsInputObjectSchema } from './mfa_challengesUncheckedCreateWithoutMfa_factorsInput.schema';
import { mfa_challengesCreateOrConnectWithoutMfa_factorsInputObjectSchema } from './mfa_challengesCreateOrConnectWithoutMfa_factorsInput.schema';
import { mfa_challengesUpsertWithWhereUniqueWithoutMfa_factorsInputObjectSchema } from './mfa_challengesUpsertWithWhereUniqueWithoutMfa_factorsInput.schema';
import { mfa_challengesCreateManyMfa_factorsInputEnvelopeObjectSchema } from './mfa_challengesCreateManyMfa_factorsInputEnvelope.schema';
import { mfa_challengesWhereUniqueInputObjectSchema } from './mfa_challengesWhereUniqueInput.schema';
import { mfa_challengesUpdateWithWhereUniqueWithoutMfa_factorsInputObjectSchema } from './mfa_challengesUpdateWithWhereUniqueWithoutMfa_factorsInput.schema';
import { mfa_challengesUpdateManyWithWhereWithoutMfa_factorsInputObjectSchema } from './mfa_challengesUpdateManyWithWhereWithoutMfa_factorsInput.schema';
import { mfa_challengesScalarWhereInputObjectSchema } from './mfa_challengesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_challengesUpdateManyWithoutMfa_factorsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => mfa_challengesCreateWithoutMfa_factorsInputObjectSchema),
          z
            .lazy(() => mfa_challengesCreateWithoutMfa_factorsInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              mfa_challengesUncheckedCreateWithoutMfa_factorsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                mfa_challengesUncheckedCreateWithoutMfa_factorsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              mfa_challengesCreateOrConnectWithoutMfa_factorsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                mfa_challengesCreateOrConnectWithoutMfa_factorsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              mfa_challengesUpsertWithWhereUniqueWithoutMfa_factorsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                mfa_challengesUpsertWithWhereUniqueWithoutMfa_factorsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => mfa_challengesCreateManyMfa_factorsInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => mfa_challengesWhereUniqueInputObjectSchema),
          z.lazy(() => mfa_challengesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => mfa_challengesWhereUniqueInputObjectSchema),
          z.lazy(() => mfa_challengesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => mfa_challengesWhereUniqueInputObjectSchema),
          z.lazy(() => mfa_challengesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => mfa_challengesWhereUniqueInputObjectSchema),
          z.lazy(() => mfa_challengesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              mfa_challengesUpdateWithWhereUniqueWithoutMfa_factorsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                mfa_challengesUpdateWithWhereUniqueWithoutMfa_factorsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              mfa_challengesUpdateManyWithWhereWithoutMfa_factorsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                mfa_challengesUpdateManyWithWhereWithoutMfa_factorsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => mfa_challengesScalarWhereInputObjectSchema),
          z.lazy(() => mfa_challengesScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const mfa_challengesUpdateManyWithoutMfa_factorsNestedInputObjectSchema =
  Schema;
