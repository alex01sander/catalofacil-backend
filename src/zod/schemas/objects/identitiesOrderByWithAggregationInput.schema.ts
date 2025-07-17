import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { identitiesCountOrderByAggregateInputObjectSchema } from './identitiesCountOrderByAggregateInput.schema';
import { identitiesMaxOrderByAggregateInputObjectSchema } from './identitiesMaxOrderByAggregateInput.schema';
import { identitiesMinOrderByAggregateInputObjectSchema } from './identitiesMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.identitiesOrderByWithAggregationInput> = z
  .object({
    provider_id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    identity_data: z.lazy(() => SortOrderSchema).optional(),
    provider: z.lazy(() => SortOrderSchema).optional(),
    last_sign_in_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
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
    email: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => identitiesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => identitiesMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => identitiesMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const identitiesOrderByWithAggregationInputObjectSchema = Schema;
