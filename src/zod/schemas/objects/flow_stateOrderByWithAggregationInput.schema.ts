import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { flow_stateCountOrderByAggregateInputObjectSchema } from './flow_stateCountOrderByAggregateInput.schema';
import { flow_stateMaxOrderByAggregateInputObjectSchema } from './flow_stateMaxOrderByAggregateInput.schema';
import { flow_stateMinOrderByAggregateInputObjectSchema } from './flow_stateMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.flow_stateOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => flow_stateCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => flow_stateMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => flow_stateMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const flow_stateOrderByWithAggregationInputObjectSchema = Schema;
