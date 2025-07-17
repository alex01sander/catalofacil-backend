import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersSumOrderByAggregateInput> = z
  .object({
    total_amount: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ordersSumOrderByAggregateInputObjectSchema = Schema;
