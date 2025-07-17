import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.product_costsMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    store_id: z.lazy(() => SortOrderSchema).optional(),
    product_name: z.lazy(() => SortOrderSchema).optional(),
    cost_price: z.lazy(() => SortOrderSchema).optional(),
    desired_margin: z.lazy(() => SortOrderSchema).optional(),
    suggested_price: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const product_costsMaxOrderByAggregateInputObjectSchema = Schema;
