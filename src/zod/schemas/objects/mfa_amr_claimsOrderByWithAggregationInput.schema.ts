import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { mfa_amr_claimsCountOrderByAggregateInputObjectSchema } from './mfa_amr_claimsCountOrderByAggregateInput.schema';
import { mfa_amr_claimsMaxOrderByAggregateInputObjectSchema } from './mfa_amr_claimsMaxOrderByAggregateInput.schema';
import { mfa_amr_claimsMinOrderByAggregateInputObjectSchema } from './mfa_amr_claimsMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsOrderByWithAggregationInput> = z
  .object({
    session_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    authentication_method: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => mfa_amr_claimsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => mfa_amr_claimsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => mfa_amr_claimsMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const mfa_amr_claimsOrderByWithAggregationInputObjectSchema = Schema;
