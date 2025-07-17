import { z } from 'zod';
import { mfa_factorsWhereUniqueInputObjectSchema } from './mfa_factorsWhereUniqueInput.schema';
import { mfa_factorsCreateWithoutMfa_challengesInputObjectSchema } from './mfa_factorsCreateWithoutMfa_challengesInput.schema';
import { mfa_factorsUncheckedCreateWithoutMfa_challengesInputObjectSchema } from './mfa_factorsUncheckedCreateWithoutMfa_challengesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsCreateOrConnectWithoutMfa_challengesInput> =
  z
    .object({
      where: z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => mfa_factorsCreateWithoutMfa_challengesInputObjectSchema),
        z.lazy(
          () =>
            mfa_factorsUncheckedCreateWithoutMfa_challengesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const mfa_factorsCreateOrConnectWithoutMfa_challengesInputObjectSchema =
  Schema;
