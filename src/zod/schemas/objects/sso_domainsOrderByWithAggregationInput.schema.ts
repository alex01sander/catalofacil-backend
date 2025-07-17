import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { sso_domainsCountOrderByAggregateInputObjectSchema } from './sso_domainsCountOrderByAggregateInput.schema';
import { sso_domainsMaxOrderByAggregateInputObjectSchema } from './sso_domainsMaxOrderByAggregateInput.schema';
import { sso_domainsMinOrderByAggregateInputObjectSchema } from './sso_domainsMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_domainsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sso_provider_id: z.lazy(() => SortOrderSchema).optional(),
    domain: z.lazy(() => SortOrderSchema).optional(),
    created_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    updated_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => sso_domainsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => sso_domainsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => sso_domainsMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const sso_domainsOrderByWithAggregationInputObjectSchema = Schema;
