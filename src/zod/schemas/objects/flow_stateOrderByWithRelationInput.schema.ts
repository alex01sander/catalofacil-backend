import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { saml_relay_statesOrderByRelationAggregateInputObjectSchema } from './saml_relay_statesOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.flow_stateOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    auth_code: z.lazy(() => SortOrderSchema).optional(),
    code_challenge_method: z.lazy(() => SortOrderSchema).optional(),
    code_challenge: z.lazy(() => SortOrderSchema).optional(),
    provider_type: z.lazy(() => SortOrderSchema).optional(),
    provider_access_token: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    provider_refresh_token: z
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
    authentication_method: z.lazy(() => SortOrderSchema).optional(),
    auth_code_issued_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    saml_relay_states: z
      .lazy(() => saml_relay_statesOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const flow_stateOrderByWithRelationInputObjectSchema = Schema;
