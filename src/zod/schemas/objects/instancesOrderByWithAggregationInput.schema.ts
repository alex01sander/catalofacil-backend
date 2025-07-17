import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { instancesCountOrderByAggregateInputObjectSchema } from './instancesCountOrderByAggregateInput.schema';
import { instancesMaxOrderByAggregateInputObjectSchema } from './instancesMaxOrderByAggregateInput.schema';
import { instancesMinOrderByAggregateInputObjectSchema } from './instancesMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.instancesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    uuid: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    raw_base_config: z
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
      .lazy(() => instancesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => instancesMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => instancesMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const instancesOrderByWithAggregationInputObjectSchema = Schema;
