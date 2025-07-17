import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { domain_ownersCountOrderByAggregateInputObjectSchema } from './domain_ownersCountOrderByAggregateInput.schema';
import { domain_ownersMaxOrderByAggregateInputObjectSchema } from './domain_ownersMaxOrderByAggregateInput.schema';
import { domain_ownersMinOrderByAggregateInputObjectSchema } from './domain_ownersMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.domain_ownersOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    domain: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
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
    domain_type: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => domain_ownersCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => domain_ownersMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => domain_ownersMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const domain_ownersOrderByWithAggregationInputObjectSchema = Schema;
