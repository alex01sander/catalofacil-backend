import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { refresh_tokensCountOrderByAggregateInputObjectSchema } from './refresh_tokensCountOrderByAggregateInput.schema';
import { refresh_tokensAvgOrderByAggregateInputObjectSchema } from './refresh_tokensAvgOrderByAggregateInput.schema';
import { refresh_tokensMaxOrderByAggregateInputObjectSchema } from './refresh_tokensMaxOrderByAggregateInput.schema';
import { refresh_tokensMinOrderByAggregateInputObjectSchema } from './refresh_tokensMinOrderByAggregateInput.schema';
import { refresh_tokensSumOrderByAggregateInputObjectSchema } from './refresh_tokensSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.refresh_tokensOrderByWithAggregationInput> = z
  .object({
    instance_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    token: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    user_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    revoked: z
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
    parent: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    session_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => refresh_tokensCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => refresh_tokensAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => refresh_tokensMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => refresh_tokensMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => refresh_tokensSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const refresh_tokensOrderByWithAggregationInputObjectSchema = Schema;
