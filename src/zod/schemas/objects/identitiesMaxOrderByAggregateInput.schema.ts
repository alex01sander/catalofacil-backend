import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.identitiesMaxOrderByAggregateInput> = z
  .object({
    provider_id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    provider: z.lazy(() => SortOrderSchema).optional(),
    last_sign_in_at: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const identitiesMaxOrderByAggregateInputObjectSchema = Schema;
