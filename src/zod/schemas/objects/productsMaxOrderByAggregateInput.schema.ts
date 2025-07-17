import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    category_id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    stock: z.lazy(() => SortOrderSchema).optional(),
    is_active: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    store_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const productsMaxOrderByAggregateInputObjectSchema = Schema;
