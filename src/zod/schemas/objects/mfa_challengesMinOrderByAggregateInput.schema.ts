import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_challengesMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    factor_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    verified_at: z.lazy(() => SortOrderSchema).optional(),
    ip_address: z.lazy(() => SortOrderSchema).optional(),
    otp_code: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const mfa_challengesMinOrderByAggregateInputObjectSchema = Schema;
