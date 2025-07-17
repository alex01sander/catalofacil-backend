import { z } from 'zod';
import { mfa_amr_claimsCreateManySessionsInputObjectSchema } from './mfa_amr_claimsCreateManySessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsCreateManySessionsInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => mfa_amr_claimsCreateManySessionsInputObjectSchema),
        z.lazy(() => mfa_amr_claimsCreateManySessionsInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const mfa_amr_claimsCreateManySessionsInputEnvelopeObjectSchema = Schema;
