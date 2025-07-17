import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    store_owner_id: z.lazy(() => SortOrderSchema).optional(),
    customer_id: z.lazy(() => SortOrderSchema).optional(),
    customer_name: z.lazy(() => SortOrderSchema).optional(),
    customer_email: z.lazy(() => SortOrderSchema).optional(),
    customer_phone: z.lazy(() => SortOrderSchema).optional(),
    total_amount: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    store_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ordersCountOrderByAggregateInputObjectSchema = Schema;
