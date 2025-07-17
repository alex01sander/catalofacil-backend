import { z } from 'zod';
import { mfa_amr_claimsWhereUniqueInputObjectSchema } from './mfa_amr_claimsWhereUniqueInput.schema';
import { mfa_amr_claimsCreateWithoutSessionsInputObjectSchema } from './mfa_amr_claimsCreateWithoutSessionsInput.schema';
import { mfa_amr_claimsUncheckedCreateWithoutSessionsInputObjectSchema } from './mfa_amr_claimsUncheckedCreateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsCreateOrConnectWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => mfa_amr_claimsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => mfa_amr_claimsCreateWithoutSessionsInputObjectSchema),
        z.lazy(
          () => mfa_amr_claimsUncheckedCreateWithoutSessionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const mfa_amr_claimsCreateOrConnectWithoutSessionsInputObjectSchema =
  Schema;
