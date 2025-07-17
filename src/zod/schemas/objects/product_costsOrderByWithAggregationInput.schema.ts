import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { product_costsCountOrderByAggregateInputObjectSchema } from './product_costsCountOrderByAggregateInput.schema';
import { product_costsAvgOrderByAggregateInputObjectSchema } from './product_costsAvgOrderByAggregateInput.schema';
import { product_costsMaxOrderByAggregateInputObjectSchema } from './product_costsMaxOrderByAggregateInput.schema';
import { product_costsMinOrderByAggregateInputObjectSchema } from './product_costsMinOrderByAggregateInput.schema';
import { product_costsSumOrderByAggregateInputObjectSchema } from './product_costsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.product_costsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    store_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    product_name: z.lazy(() => SortOrderSchema).optional(),
    cost_price: z.lazy(() => SortOrderSchema).optional(),
    desired_margin: z.lazy(() => SortOrderSchema).optional(),
    suggested_price: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => product_costsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => product_costsAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => product_costsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => product_costsMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => product_costsSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const product_costsOrderByWithAggregationInputObjectSchema = Schema;
