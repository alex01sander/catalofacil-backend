import { z } from 'zod';
import { aal_levelSchema } from '../enums/aal_level.schema';
import { refresh_tokensUncheckedCreateNestedManyWithoutSessionsInputObjectSchema } from './refresh_tokensUncheckedCreateNestedManyWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsUncheckedCreateWithoutMfa_amr_claimsInput> =
  z
    .object({
      id: z.string(),
      user_id: z.string(),
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
          () =>
            refresh_tokensUncheckedCreateNestedManyWithoutSessionsInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const sessionsUncheckedCreateWithoutMfa_amr_claimsInputObjectSchema =
  Schema;
