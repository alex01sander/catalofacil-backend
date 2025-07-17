import { z } from 'zod';
import { mfa_amr_claimsScalarWhereInputObjectSchema } from './mfa_amr_claimsScalarWhereInput.schema';
import { mfa_amr_claimsUpdateManyMutationInputObjectSchema } from './mfa_amr_claimsUpdateManyMutationInput.schema';
import { mfa_amr_claimsUncheckedUpdateManyWithoutMfa_amr_claimsInputObjectSchema } from './mfa_amr_claimsUncheckedUpdateManyWithoutMfa_amr_claimsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsUpdateManyWithWhereWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => mfa_amr_claimsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => mfa_amr_claimsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            mfa_amr_claimsUncheckedUpdateManyWithoutMfa_amr_claimsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const mfa_amr_claimsUpdateManyWithWhereWithoutSessionsInputObjectSchema =
  Schema;
