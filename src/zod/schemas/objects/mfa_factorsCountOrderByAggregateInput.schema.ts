import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    friendly_name: z.lazy(() => SortOrderSchema).optional(),
    factor_type: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    secret: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    last_challenged_at: z.lazy(() => SortOrderSchema).optional(),
    web_authn_credential: z.lazy(() => SortOrderSchema).optional(),
    web_authn_aaguid: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const mfa_factorsCountOrderByAggregateInputObjectSchema = Schema;
