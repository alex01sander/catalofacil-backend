import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { flow_stateOrderByWithRelationInputObjectSchema } from './flow_stateOrderByWithRelationInput.schema';
import { sso_providersOrderByWithRelationInputObjectSchema } from './sso_providersOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesOrderByWithRelationInput> = z
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
    flow_state: z
      .lazy(() => flow_stateOrderByWithRelationInputObjectSchema)
      .optional(),
    sso_providers: z
      .lazy(() => sso_providersOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const saml_relay_statesOrderByWithRelationInputObjectSchema = Schema;
