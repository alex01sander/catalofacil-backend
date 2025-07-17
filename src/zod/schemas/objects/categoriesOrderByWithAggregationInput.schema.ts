import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { categoriesCountOrderByAggregateInputObjectSchema } from './categoriesCountOrderByAggregateInput.schema';
import { categoriesMaxOrderByAggregateInputObjectSchema } from './categoriesMaxOrderByAggregateInput.schema';
import { categoriesMinOrderByAggregateInputObjectSchema } from './categoriesMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    color: z
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
      .lazy(() => categoriesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => categoriesMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => categoriesMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const categoriesOrderByWithAggregationInputObjectSchema = Schema;
