import { z } from 'zod';
import { mfa_factorsCreateWithoutUsersInputObjectSchema } from './mfa_factorsCreateWithoutUsersInput.schema';
import { mfa_factorsUncheckedCreateWithoutUsersInputObjectSchema } from './mfa_factorsUncheckedCreateWithoutUsersInput.schema';
import { mfa_factorsCreateOrConnectWithoutUsersInputObjectSchema } from './mfa_factorsCreateOrConnectWithoutUsersInput.schema';
import { mfa_factorsCreateManyUsersInputEnvelopeObjectSchema } from './mfa_factorsCreateManyUsersInputEnvelope.schema';
import { mfa_factorsWhereUniqueInputObjectSchema } from './mfa_factorsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsUncheckedCreateNestedManyWithoutUsersInput> =
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
      createMany: z
        .lazy(() => mfa_factorsCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema),
          z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const mfa_factorsUncheckedCreateNestedManyWithoutUsersInputObjectSchema =
  Schema;
