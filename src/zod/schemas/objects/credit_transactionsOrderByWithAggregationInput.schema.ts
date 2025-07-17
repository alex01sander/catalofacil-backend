import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { credit_transactionsCountOrderByAggregateInputObjectSchema } from './credit_transactionsCountOrderByAggregateInput.schema';
import { credit_transactionsAvgOrderByAggregateInputObjectSchema } from './credit_transactionsAvgOrderByAggregateInput.schema';
import { credit_transactionsMaxOrderByAggregateInputObjectSchema } from './credit_transactionsMaxOrderByAggregateInput.schema';
import { credit_transactionsMinOrderByAggregateInputObjectSchema } from './credit_transactionsMinOrderByAggregateInput.schema';
import { credit_transactionsSumOrderByAggregateInputObjectSchema } from './credit_transactionsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_transactionsOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      credit_account_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      amount: z.lazy(() => SortOrderSchema).optional(),
      description: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      date: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => credit_transactionsCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => credit_transactionsAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => credit_transactionsMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => credit_transactionsMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => credit_transactionsSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const credit_transactionsOrderByWithAggregationInputObjectSchema =
  Schema;
