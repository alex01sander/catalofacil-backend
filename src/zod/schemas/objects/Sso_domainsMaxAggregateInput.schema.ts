import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Sso_domainsMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    sso_provider_id: z.literal(true).optional(),
    domain: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
  })
  .strict();

export const Sso_domainsMaxAggregateInputObjectSchema = Schema;
