import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { one_time_tokensCountOrderByAggregateInputObjectSchema } from './one_time_tokensCountOrderByAggregateInput.schema';
import { one_time_tokensMaxOrderByAggregateInputObjectSchema } from './one_time_tokensMaxOrderByAggregateInput.schema';
import { one_time_tokensMinOrderByAggregateInputObjectSchema } from './one_time_tokensMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    token_type: z.lazy(() => SortOrderSchema).optional(),
    token_hash: z.lazy(() => SortOrderSchema).optional(),
    relates_to: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => one_time_tokensCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => one_time_tokensMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => one_time_tokensMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const one_time_tokensOrderByWithAggregationInputObjectSchema = Schema;
