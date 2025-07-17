import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ordersCountOrderByAggregateInputObjectSchema } from './ordersCountOrderByAggregateInput.schema';
import { ordersAvgOrderByAggregateInputObjectSchema } from './ordersAvgOrderByAggregateInput.schema';
import { ordersMaxOrderByAggregateInputObjectSchema } from './ordersMaxOrderByAggregateInput.schema';
import { ordersMinOrderByAggregateInputObjectSchema } from './ordersMinOrderByAggregateInput.schema';
import { ordersSumOrderByAggregateInputObjectSchema } from './ordersSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    store_owner_id: z.lazy(() => SortOrderSchema).optional(),
    customer_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    customer_name: z.lazy(() => SortOrderSchema).optional(),
    customer_email: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    customer_phone: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    total_amount: z.lazy(() => SortOrderSchema).optional(),
    status: z
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
    store_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => ordersCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ordersAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ordersMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ordersMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ordersSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ordersOrderByWithAggregationInputObjectSchema = Schema;
