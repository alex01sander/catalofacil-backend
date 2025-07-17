import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cash_flowSumOrderByAggregateInput> = z
  .object({
    amount: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const cash_flowSumOrderByAggregateInputObjectSchema = Schema;
