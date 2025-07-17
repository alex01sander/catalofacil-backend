import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sso_provider_id: z.lazy(() => SortOrderSchema).optional(),
    request_id: z.lazy(() => SortOrderSchema).optional(),
    for_email: z.lazy(() => SortOrderSchema).optional(),
    redirect_to: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    flow_state_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const saml_relay_statesMinOrderByAggregateInputObjectSchema = Schema;
