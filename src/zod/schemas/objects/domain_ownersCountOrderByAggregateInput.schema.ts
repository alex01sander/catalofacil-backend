import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.domain_ownersCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    domain: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    domain_type: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const domain_ownersCountOrderByAggregateInputObjectSchema = Schema;
