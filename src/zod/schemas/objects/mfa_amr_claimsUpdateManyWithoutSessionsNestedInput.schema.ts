import { z } from 'zod';
import { mfa_amr_claimsCreateWithoutSessionsInputObjectSchema } from './mfa_amr_claimsCreateWithoutSessionsInput.schema';
import { mfa_amr_claimsUncheckedCreateWithoutSessionsInputObjectSchema } from './mfa_amr_claimsUncheckedCreateWithoutSessionsInput.schema';
import { mfa_amr_claimsCreateOrConnectWithoutSessionsInputObjectSchema } from './mfa_amr_claimsCreateOrConnectWithoutSessionsInput.schema';
import { mfa_amr_claimsUpsertWithWhereUniqueWithoutSessionsInputObjectSchema } from './mfa_amr_claimsUpsertWithWhereUniqueWithoutSessionsInput.schema';
import { mfa_amr_claimsCreateManySessionsInputEnvelopeObjectSchema } from './mfa_amr_claimsCreateManySessionsInputEnvelope.schema';
import { mfa_amr_claimsWhereUniqueInputObjectSchema } from './mfa_amr_claimsWhereUniqueInput.schema';
import { mfa_amr_claimsUpdateWithWhereUniqueWithoutSessionsInputObjectSchema } from './mfa_amr_claimsUpdateWithWhereUniqueWithoutSessionsInput.schema';
import { mfa_amr_claimsUpdateManyWithWhereWithoutSessionsInputObjectSchema } from './mfa_amr_claimsUpdateManyWithWhereWithoutSessionsInput.schema';
import { mfa_amr_claimsScalarWhereInputObjectSchema } from './mfa_amr_claimsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsUpdateManyWithoutSessionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => mfa_amr_claimsCreateWithoutSessionsInputObjectSchema),
          z
            .lazy(() => mfa_amr_claimsCreateWithoutSessionsInputObjectSchema)
            .array(),
          z.lazy(
            () => mfa_amr_claimsUncheckedCreateWithoutSessionsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                mfa_amr_claimsUncheckedCreateWithoutSessionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => mfa_amr_claimsCreateOrConnectWithoutSessionsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                mfa_amr_claimsCreateOrConnectWithoutSessionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              mfa_amr_claimsUpsertWithWhereUniqueWithoutSessionsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                mfa_amr_claimsUpsertWithWhereUniqueWithoutSessionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => mfa_amr_claimsCreateManySessionsInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => mfa_amr_claimsWhereUniqueInputObjectSchema),
          z.lazy(() => mfa_amr_claimsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => mfa_amr_claimsWhereUniqueInputObjectSchema),
          z.lazy(() => mfa_amr_claimsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => mfa_amr_claimsWhereUniqueInputObjectSchema),
          z.lazy(() => mfa_amr_claimsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => mfa_amr_claimsWhereUniqueInputObjectSchema),
          z.lazy(() => mfa_amr_claimsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              mfa_amr_claimsUpdateWithWhereUniqueWithoutSessionsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                mfa_amr_claimsUpdateWithWhereUniqueWithoutSessionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              mfa_amr_claimsUpdateManyWithWhereWithoutSessionsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                mfa_amr_claimsUpdateManyWithWhereWithoutSessionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => mfa_amr_claimsScalarWhereInputObjectSchema),
          z.lazy(() => mfa_amr_claimsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const mfa_amr_claimsUpdateManyWithoutSessionsNestedInputObjectSchema =
  Schema;
