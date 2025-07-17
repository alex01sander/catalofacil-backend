import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { saml_providersOrderByRelationAggregateInputObjectSchema } from './saml_providersOrderByRelationAggregateInput.schema';
import { saml_relay_statesOrderByRelationAggregateInputObjectSchema } from './saml_relay_statesOrderByRelationAggregateInput.schema';
import { sso_domainsOrderByRelationAggregateInputObjectSchema } from './sso_domainsOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    resource_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    created_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    updated_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    saml_providers: z
      .lazy(() => saml_providersOrderByRelationAggregateInputObjectSchema)
      .optional(),
    saml_relay_states: z
      .lazy(() => saml_relay_statesOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sso_domains: z
      .lazy(() => sso_domainsOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const sso_providersOrderByWithRelationInputObjectSchema = Schema;
