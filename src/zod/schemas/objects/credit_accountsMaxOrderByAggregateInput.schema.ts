import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_accountsMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    store_id: z.lazy(() => SortOrderSchema).optional(),
    customer_name: z.lazy(() => SortOrderSchema).optional(),
    customer_phone: z.lazy(() => SortOrderSchema).optional(),
    total_debt: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const credit_accountsMaxOrderByAggregateInputObjectSchema = Schema;
