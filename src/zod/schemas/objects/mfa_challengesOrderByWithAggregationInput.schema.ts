import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { mfa_challengesCountOrderByAggregateInputObjectSchema } from './mfa_challengesCountOrderByAggregateInput.schema';
import { mfa_challengesMaxOrderByAggregateInputObjectSchema } from './mfa_challengesMaxOrderByAggregateInput.schema';
import { mfa_challengesMinOrderByAggregateInputObjectSchema } from './mfa_challengesMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_challengesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    factor_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    verified_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    ip_address: z.lazy(() => SortOrderSchema).optional(),
    otp_code: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    web_authn_session_data: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => mfa_challengesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => mfa_challengesMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => mfa_challengesMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const mfa_challengesOrderByWithAggregationInputObjectSchema = Schema;
