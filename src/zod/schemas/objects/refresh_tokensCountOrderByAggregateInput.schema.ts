import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.refresh_tokensCountOrderByAggregateInput> = z
  .object({
    instance_id: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    token: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    revoked: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    parent: z.lazy(() => SortOrderSchema).optional(),
    session_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const refresh_tokensCountOrderByAggregateInputObjectSchema = Schema;
