import { z } from 'zod';
import { mfa_challengesCreateWithoutMfa_factorsInputObjectSchema } from './mfa_challengesCreateWithoutMfa_factorsInput.schema';
import { mfa_challengesUncheckedCreateWithoutMfa_factorsInputObjectSchema } from './mfa_challengesUncheckedCreateWithoutMfa_factorsInput.schema';
import { mfa_challengesCreateOrConnectWithoutMfa_factorsInputObjectSchema } from './mfa_challengesCreateOrConnectWithoutMfa_factorsInput.schema';
import { mfa_challengesCreateManyMfa_factorsInputEnvelopeObjectSchema } from './mfa_challengesCreateManyMfa_factorsInputEnvelope.schema';
import { mfa_challengesWhereUniqueInputObjectSchema } from './mfa_challengesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_challengesUncheckedCreateNestedManyWithoutMfa_factorsInput> =
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
      createMany: z
        .lazy(
          () => mfa_challengesCreateManyMfa_factorsInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => mfa_challengesWhereUniqueInputObjectSchema),
          z.lazy(() => mfa_challengesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const mfa_challengesUncheckedCreateNestedManyWithoutMfa_factorsInputObjectSchema =
  Schema;
