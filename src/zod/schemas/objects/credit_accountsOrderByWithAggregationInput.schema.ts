import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { credit_accountsCountOrderByAggregateInputObjectSchema } from './credit_accountsCountOrderByAggregateInput.schema';
import { credit_accountsAvgOrderByAggregateInputObjectSchema } from './credit_accountsAvgOrderByAggregateInput.schema';
import { credit_accountsMaxOrderByAggregateInputObjectSchema } from './credit_accountsMaxOrderByAggregateInput.schema';
import { credit_accountsMinOrderByAggregateInputObjectSchema } from './credit_accountsMinOrderByAggregateInput.schema';
import { credit_accountsSumOrderByAggregateInputObjectSchema } from './credit_accountsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_accountsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    store_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    customer_name: z.lazy(() => SortOrderSchema).optional(),
    customer_phone: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    total_debt: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => credit_accountsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => credit_accountsAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => credit_accountsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => credit_accountsMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => credit_accountsSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const credit_accountsOrderByWithAggregationInputObjectSchema = Schema;
