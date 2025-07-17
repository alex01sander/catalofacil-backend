import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { order_itemsCountOrderByAggregateInputObjectSchema } from './order_itemsCountOrderByAggregateInput.schema';
import { order_itemsAvgOrderByAggregateInputObjectSchema } from './order_itemsAvgOrderByAggregateInput.schema';
import { order_itemsMaxOrderByAggregateInputObjectSchema } from './order_itemsMaxOrderByAggregateInput.schema';
import { order_itemsMinOrderByAggregateInputObjectSchema } from './order_itemsMinOrderByAggregateInput.schema';
import { order_itemsSumOrderByAggregateInputObjectSchema } from './order_itemsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    order_id: z.lazy(() => SortOrderSchema).optional(),
    product_id: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    unit_price: z.lazy(() => SortOrderSchema).optional(),
    total_price: z.lazy(() => SortOrderSchema).optional(),
    created_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => order_itemsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => order_itemsAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => order_itemsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => order_itemsMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => order_itemsSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const order_itemsOrderByWithAggregationInputObjectSchema = Schema;
