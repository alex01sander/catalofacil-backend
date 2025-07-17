import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.product_costsAvgOrderByAggregateInput> = z
  .object({
    cost_price: z.lazy(() => SortOrderSchema).optional(),
    desired_margin: z.lazy(() => SortOrderSchema).optional(),
    suggested_price: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const product_costsAvgOrderByAggregateInputObjectSchema = Schema;
