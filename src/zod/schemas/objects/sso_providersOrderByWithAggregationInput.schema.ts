import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { sso_providersCountOrderByAggregateInputObjectSchema } from './sso_providersCountOrderByAggregateInput.schema';
import { sso_providersMaxOrderByAggregateInputObjectSchema } from './sso_providersMaxOrderByAggregateInput.schema';
import { sso_providersMinOrderByAggregateInputObjectSchema } from './sso_providersMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => sso_providersCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => sso_providersMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => sso_providersMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const sso_providersOrderByWithAggregationInputObjectSchema = Schema;
