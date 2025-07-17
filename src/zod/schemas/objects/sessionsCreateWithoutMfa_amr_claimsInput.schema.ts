import { z } from 'zod';
import { aal_levelSchema } from '../enums/aal_level.schema';
import { refresh_tokensCreateNestedManyWithoutSessionsInputObjectSchema } from './refresh_tokensCreateNestedManyWithoutSessionsInput.schema';
import { usersCreateNestedOneWithoutSessionsInputObjectSchema } from './usersCreateNestedOneWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsCreateWithoutMfa_amr_claimsInput> = z
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
    refresh_tokens: z
      .lazy(
        () => refresh_tokensCreateNestedManyWithoutSessionsInputObjectSchema,
      )
      .optional(),
    users: z.lazy(() => usersCreateNestedOneWithoutSessionsInputObjectSchema),
  })
  .strict();

export const sessionsCreateWithoutMfa_amr_claimsInputObjectSchema = Schema;
