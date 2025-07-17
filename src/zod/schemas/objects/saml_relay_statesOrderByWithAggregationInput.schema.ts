import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { saml_relay_statesCountOrderByAggregateInputObjectSchema } from './saml_relay_statesCountOrderByAggregateInput.schema';
import { saml_relay_statesMaxOrderByAggregateInputObjectSchema } from './saml_relay_statesMaxOrderByAggregateInput.schema';
import { saml_relay_statesMinOrderByAggregateInputObjectSchema } from './saml_relay_statesMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sso_provider_id: z.lazy(() => SortOrderSchema).optional(),
    request_id: z.lazy(() => SortOrderSchema).optional(),
    for_email: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    redirect_to: z
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
    flow_state_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => saml_relay_statesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => saml_relay_statesMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => saml_relay_statesMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const saml_relay_statesOrderByWithAggregationInputObjectSchema = Schema;
