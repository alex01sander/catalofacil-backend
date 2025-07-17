import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { mfa_factorsCountOrderByAggregateInputObjectSchema } from './mfa_factorsCountOrderByAggregateInput.schema';
import { mfa_factorsMaxOrderByAggregateInputObjectSchema } from './mfa_factorsMaxOrderByAggregateInput.schema';
import { mfa_factorsMinOrderByAggregateInputObjectSchema } from './mfa_factorsMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    friendly_name: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    factor_type: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    secret: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    phone: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    last_challenged_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    web_authn_credential: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    web_authn_aaguid: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => mfa_factorsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => mfa_factorsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => mfa_factorsMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const mfa_factorsOrderByWithAggregationInputObjectSchema = Schema;
