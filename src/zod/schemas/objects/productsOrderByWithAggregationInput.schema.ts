import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { productsCountOrderByAggregateInputObjectSchema } from './productsCountOrderByAggregateInput.schema';
import { productsAvgOrderByAggregateInputObjectSchema } from './productsAvgOrderByAggregateInput.schema';
import { productsMaxOrderByAggregateInputObjectSchema } from './productsMaxOrderByAggregateInput.schema';
import { productsMinOrderByAggregateInputObjectSchema } from './productsMinOrderByAggregateInput.schema';
import { productsSumOrderByAggregateInputObjectSchema } from './productsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    category_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    stock: z.lazy(() => SortOrderSchema).optional(),
    is_active: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    image: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    images: z.lazy(() => SortOrderSchema).optional(),
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
      .lazy(() => productsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => productsAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => productsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => productsMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => productsSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const productsOrderByWithAggregationInputObjectSchema = Schema;
