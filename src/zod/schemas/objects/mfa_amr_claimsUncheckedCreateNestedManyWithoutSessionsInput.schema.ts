import { z } from 'zod';
import { mfa_amr_claimsCreateWithoutSessionsInputObjectSchema } from './mfa_amr_claimsCreateWithoutSessionsInput.schema';
import { mfa_amr_claimsUncheckedCreateWithoutSessionsInputObjectSchema } from './mfa_amr_claimsUncheckedCreateWithoutSessionsInput.schema';
import { mfa_amr_claimsCreateOrConnectWithoutSessionsInputObjectSchema } from './mfa_amr_claimsCreateOrConnectWithoutSessionsInput.schema';
import { mfa_amr_claimsCreateManySessionsInputEnvelopeObjectSchema } from './mfa_amr_claimsCreateManySessionsInputEnvelope.schema';
import { mfa_amr_claimsWhereUniqueInputObjectSchema } from './mfa_amr_claimsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsUncheckedCreateNestedManyWithoutSessionsInput> =
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
      createMany: z
        .lazy(() => mfa_amr_claimsCreateManySessionsInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => mfa_amr_claimsWhereUniqueInputObjectSchema),
          z.lazy(() => mfa_amr_claimsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const mfa_amr_claimsUncheckedCreateNestedManyWithoutSessionsInputObjectSchema =
  Schema;
