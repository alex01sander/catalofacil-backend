import { z } from 'zod';
import { mfa_factorsCreateWithoutUsersInputObjectSchema } from './mfa_factorsCreateWithoutUsersInput.schema';
import { mfa_factorsUncheckedCreateWithoutUsersInputObjectSchema } from './mfa_factorsUncheckedCreateWithoutUsersInput.schema';
import { mfa_factorsCreateOrConnectWithoutUsersInputObjectSchema } from './mfa_factorsCreateOrConnectWithoutUsersInput.schema';
import { mfa_factorsUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './mfa_factorsUpsertWithWhereUniqueWithoutUsersInput.schema';
import { mfa_factorsCreateManyUsersInputEnvelopeObjectSchema } from './mfa_factorsCreateManyUsersInputEnvelope.schema';
import { mfa_factorsWhereUniqueInputObjectSchema } from './mfa_factorsWhereUniqueInput.schema';
import { mfa_factorsUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './mfa_factorsUpdateWithWhereUniqueWithoutUsersInput.schema';
import { mfa_factorsUpdateManyWithWhereWithoutUsersInputObjectSchema } from './mfa_factorsUpdateManyWithWhereWithoutUsersInput.schema';
import { mfa_factorsScalarWhereInputObjectSchema } from './mfa_factorsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsUncheckedUpdateManyWithoutUsersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => mfa_factorsCreateWithoutUsersInputObjectSchema),
          z.lazy(() => mfa_factorsCreateWithoutUsersInputObjectSchema).array(),
          z.lazy(() => mfa_factorsUncheckedCreateWithoutUsersInputObjectSchema),
          z
            .lazy(() => mfa_factorsUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => mfa_factorsCreateOrConnectWithoutUsersInputObjectSchema),
          z
            .lazy(() => mfa_factorsCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => mfa_factorsUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                mfa_factorsUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => mfa_factorsCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema),
          z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema),
          z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema),
          z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema),
          z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => mfa_factorsUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                mfa_factorsUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => mfa_factorsUpdateManyWithWhereWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () => mfa_factorsUpdateManyWithWhereWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => mfa_factorsScalarWhereInputObjectSchema),
          z.lazy(() => mfa_factorsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const mfa_factorsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema =
  Schema;
