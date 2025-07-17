import { z } from 'zod';
import { aal_levelSchema } from '../enums/aal_level.schema';
import { mfa_amr_claimsCreateNestedManyWithoutSessionsInputObjectSchema } from './mfa_amr_claimsCreateNestedManyWithoutSessionsInput.schema';
import { refresh_tokensCreateNestedManyWithoutSessionsInputObjectSchema } from './refresh_tokensCreateNestedManyWithoutSessionsInput.schema';
import { usersCreateNestedOneWithoutSessionsInputObjectSchema } from './usersCreateNestedOneWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsCreateInput> = z
  .object({
    id: z.string(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    factor_id: z.string().optional().nullable(),
    aal: z
      .lazy(() => aal_levelSchema)
      .optional()
      .nullable(),
    not_after: z.coerce.date().optional().nullable(),
    refreshed_at: z.coerce.date().optional().nullable(),
    user_agent: z.string().optional().nullable(),
    ip: z.string().optional().nullable(),
    tag: z.string().optional().nullable(),
    mfa_amr_claims: z
      .lazy(
        () => mfa_amr_claimsCreateNestedManyWithoutSessionsInputObjectSchema,
      )
      .optional(),
    refresh_tokens: z
      .lazy(
        () => refresh_tokensCreateNestedManyWithoutSessionsInputObjectSchema,
      )
      .optional(),
    users: z.lazy(() => usersCreateNestedOneWithoutSessionsInputObjectSchema),
  })
  .strict();

export const sessionsCreateInputObjectSchema = Schema;
