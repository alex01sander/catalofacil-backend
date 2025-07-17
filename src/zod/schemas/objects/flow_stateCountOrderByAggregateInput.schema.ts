import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.flow_stateCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    auth_code: z.lazy(() => SortOrderSchema).optional(),
    code_challenge_method: z.lazy(() => SortOrderSchema).optional(),
    code_challenge: z.lazy(() => SortOrderSchema).optional(),
    provider_type: z.lazy(() => SortOrderSchema).optional(),
    provider_access_token: z.lazy(() => SortOrderSchema).optional(),
    provider_refresh_token: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    authentication_method: z.lazy(() => SortOrderSchema).optional(),
    auth_code_issued_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const flow_stateCountOrderByAggregateInputObjectSchema = Schema;
