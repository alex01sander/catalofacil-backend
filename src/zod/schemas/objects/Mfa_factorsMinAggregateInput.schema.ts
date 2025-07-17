import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Mfa_factorsMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    friendly_name: z.literal(true).optional(),
    factor_type: z.literal(true).optional(),
    status: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    secret: z.literal(true).optional(),
    phone: z.literal(true).optional(),
    last_challenged_at: z.literal(true).optional(),
    web_authn_aaguid: z.literal(true).optional(),
  })
  .strict();

export const Mfa_factorsMinAggregateInputObjectSchema = Schema;
