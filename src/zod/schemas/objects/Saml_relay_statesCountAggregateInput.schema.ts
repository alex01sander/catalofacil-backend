import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Saml_relay_statesCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    sso_provider_id: z.literal(true).optional(),
    request_id: z.literal(true).optional(),
    for_email: z.literal(true).optional(),
    redirect_to: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    flow_state_id: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const Saml_relay_statesCountAggregateInputObjectSchema = Schema;
