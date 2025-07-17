import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Mfa_challengesCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    factor_id: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    verified_at: z.literal(true).optional(),
    ip_address: z.literal(true).optional(),
    otp_code: z.literal(true).optional(),
    web_authn_session_data: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const Mfa_challengesCountAggregateInputObjectSchema = Schema;
