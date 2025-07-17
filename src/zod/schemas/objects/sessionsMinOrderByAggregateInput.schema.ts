import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    factor_id: z.lazy(() => SortOrderSchema).optional(),
    aal: z.lazy(() => SortOrderSchema).optional(),
    not_after: z.lazy(() => SortOrderSchema).optional(),
    refreshed_at: z.lazy(() => SortOrderSchema).optional(),
    user_agent: z.lazy(() => SortOrderSchema).optional(),
    ip: z.lazy(() => SortOrderSchema).optional(),
    tag: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const sessionsMinOrderByAggregateInputObjectSchema = Schema;
