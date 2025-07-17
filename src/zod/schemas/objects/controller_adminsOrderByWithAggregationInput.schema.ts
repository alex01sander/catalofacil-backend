import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { controller_adminsCountOrderByAggregateInputObjectSchema } from './controller_adminsCountOrderByAggregateInput.schema';
import { controller_adminsMaxOrderByAggregateInputObjectSchema } from './controller_adminsMaxOrderByAggregateInput.schema';
import { controller_adminsMinOrderByAggregateInputObjectSchema } from './controller_adminsMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.controller_adminsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => controller_adminsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => controller_adminsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => controller_adminsMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const controller_adminsOrderByWithAggregationInputObjectSchema = Schema;
