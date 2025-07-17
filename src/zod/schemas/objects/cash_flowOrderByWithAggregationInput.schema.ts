import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { cash_flowCountOrderByAggregateInputObjectSchema } from './cash_flowCountOrderByAggregateInput.schema';
import { cash_flowAvgOrderByAggregateInputObjectSchema } from './cash_flowAvgOrderByAggregateInput.schema';
import { cash_flowMaxOrderByAggregateInputObjectSchema } from './cash_flowMaxOrderByAggregateInput.schema';
import { cash_flowMinOrderByAggregateInputObjectSchema } from './cash_flowMinOrderByAggregateInput.schema';
import { cash_flowSumOrderByAggregateInputObjectSchema } from './cash_flowSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cash_flowOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    store_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    payment_method: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => cash_flowCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => cash_flowAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => cash_flowMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => cash_flowMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => cash_flowSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const cash_flowOrderByWithAggregationInputObjectSchema = Schema;
