import { z } from 'zod';
import { mfa_challengesWhereUniqueInputObjectSchema } from './mfa_challengesWhereUniqueInput.schema';
import { mfa_challengesCreateWithoutMfa_factorsInputObjectSchema } from './mfa_challengesCreateWithoutMfa_factorsInput.schema';
import { mfa_challengesUncheckedCreateWithoutMfa_factorsInputObjectSchema } from './mfa_challengesUncheckedCreateWithoutMfa_factorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_challengesCreateOrConnectWithoutMfa_factorsInput> =
  z
    .object({
      where: z.lazy(() => mfa_challengesWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => mfa_challengesCreateWithoutMfa_factorsInputObjectSchema),
        z.lazy(
          () =>
            mfa_challengesUncheckedCreateWithoutMfa_factorsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const mfa_challengesCreateOrConnectWithoutMfa_factorsInputObjectSchema =
  Schema;
