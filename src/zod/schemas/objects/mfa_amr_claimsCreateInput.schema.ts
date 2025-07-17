import { z } from 'zod';
import { sessionsCreateNestedOneWithoutMfa_amr_claimsInputObjectSchema } from './sessionsCreateNestedOneWithoutMfa_amr_claimsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsCreateInput> = z
  .object({
    created_at: z.coerce.date(),
    updated_at: z.coerce.date(),
    authentication_method: z.string(),
    id: z.string(),
    sessions: z.lazy(
      () => sessionsCreateNestedOneWithoutMfa_amr_claimsInputObjectSchema,
    ),
  })
  .strict();

export const mfa_amr_claimsCreateInputObjectSchema = Schema;
