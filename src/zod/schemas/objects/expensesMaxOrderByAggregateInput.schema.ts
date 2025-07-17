import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.expensesMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    store_id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    due_date: z.lazy(() => SortOrderSchema).optional(),
    is_recurring: z.lazy(() => SortOrderSchema).optional(),
    recurring_frequency: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    paid_date: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const expensesMaxOrderByAggregateInputObjectSchema = Schema;
