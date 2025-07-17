import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsAvgOrderByAggregateInput> = z
  .object({
    quantity: z.lazy(() => SortOrderSchema).optional(),
    unit_price: z.lazy(() => SortOrderSchema).optional(),
    total_price: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const order_itemsAvgOrderByAggregateInputObjectSchema = Schema;
