import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Saml_providersMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    sso_provider_id: z.literal(true).optional(),
    entity_id: z.literal(true).optional(),
    metadata_xml: z.literal(true).optional(),
    metadata_url: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    name_id_format: z.literal(true).optional(),
  })
  .strict();

export const Saml_providersMaxAggregateInputObjectSchema = Schema;
