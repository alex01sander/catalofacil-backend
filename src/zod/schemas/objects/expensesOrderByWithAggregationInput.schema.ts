import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { expensesCountOrderByAggregateInputObjectSchema } from './expensesCountOrderByAggregateInput.schema';
import { expensesAvgOrderByAggregateInputObjectSchema } from './expensesAvgOrderByAggregateInput.schema';
import { expensesMaxOrderByAggregateInputObjectSchema } from './expensesMaxOrderByAggregateInput.schema';
import { expensesMinOrderByAggregateInputObjectSchema } from './expensesMinOrderByAggregateInput.schema';
import { expensesSumOrderByAggregateInputObjectSchema } from './expensesSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.expensesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    store_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    due_date: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    is_recurring: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    recurring_frequency: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    paid_date: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => expensesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => expensesAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => expensesMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => expensesMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => expensesSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const expensesOrderByWithAggregationInputObjectSchema = Schema;
