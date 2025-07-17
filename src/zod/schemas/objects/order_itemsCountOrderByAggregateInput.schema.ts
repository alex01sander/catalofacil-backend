import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    order_id: z.lazy(() => SortOrderSchema).optional(),
    product_id: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    unit_price: z.lazy(() => SortOrderSchema).optional(),
    total_price: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const order_itemsCountOrderByAggregateInputObjectSchema = Schema;
