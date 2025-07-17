import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsCreateWithoutSessionsInput> = z
  .object({
    created_at: z.coerce.date(),
    updated_at: z.coerce.date(),
    authentication_method: z.string(),
    id: z.string(),
  })
  .strict();

export const mfa_amr_claimsCreateWithoutSessionsInputObjectSchema = Schema;
