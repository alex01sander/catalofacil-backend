import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { salesCountOrderByAggregateInputObjectSchema } from './salesCountOrderByAggregateInput.schema';
import { salesAvgOrderByAggregateInputObjectSchema } from './salesAvgOrderByAggregateInput.schema';
import { salesMaxOrderByAggregateInputObjectSchema } from './salesMaxOrderByAggregateInput.schema';
import { salesMinOrderByAggregateInputObjectSchema } from './salesMinOrderByAggregateInput.schema';
import { salesSumOrderByAggregateInputObjectSchema } from './salesSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.salesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    product_name: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    unit_price: z.lazy(() => SortOrderSchema).optional(),
    total_price: z.lazy(() => SortOrderSchema).optional(),
    sale_date: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    store_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => salesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => salesAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => salesMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => salesMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => salesSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const salesOrderByWithAggregationInputObjectSchema = Schema;
