import { z } from 'zod';
import { mfa_amr_claimsWhereUniqueInputObjectSchema } from './mfa_amr_claimsWhereUniqueInput.schema';
import { mfa_amr_claimsUpdateWithoutSessionsInputObjectSchema } from './mfa_amr_claimsUpdateWithoutSessionsInput.schema';
import { mfa_amr_claimsUncheckedUpdateWithoutSessionsInputObjectSchema } from './mfa_amr_claimsUncheckedUpdateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsUpdateWithWhereUniqueWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => mfa_amr_claimsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => mfa_amr_claimsUpdateWithoutSessionsInputObjectSchema),
        z.lazy(
          () => mfa_amr_claimsUncheckedUpdateWithoutSessionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const mfa_amr_claimsUpdateWithWhereUniqueWithoutSessionsInputObjectSchema =
  Schema;
