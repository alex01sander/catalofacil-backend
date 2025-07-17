import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsCountOrderByAggregateInput> = z
  .object({
    session_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    authentication_method: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const mfa_amr_claimsCountOrderByAggregateInputObjectSchema = Schema;
