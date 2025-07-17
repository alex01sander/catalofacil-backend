import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Flow_stateMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    auth_code: z.literal(true).optional(),
    code_challenge_method: z.literal(true).optional(),
    code_challenge: z.literal(true).optional(),
    provider_type: z.literal(true).optional(),
    provider_access_token: z.literal(true).optional(),
    provider_refresh_token: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    authentication_method: z.literal(true).optional(),
    auth_code_issued_at: z.literal(true).optional(),
  })
  .strict();

export const Flow_stateMinAggregateInputObjectSchema = Schema;
