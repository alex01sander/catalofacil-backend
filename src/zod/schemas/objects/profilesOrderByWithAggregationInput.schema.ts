import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { profilesCountOrderByAggregateInputObjectSchema } from './profilesCountOrderByAggregateInput.schema';
import { profilesMaxOrderByAggregateInputObjectSchema } from './profilesMaxOrderByAggregateInput.schema';
import { profilesMinOrderByAggregateInputObjectSchema } from './profilesMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.profilesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    full_name: z
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
    _count: z
      .lazy(() => profilesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => profilesMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => profilesMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const profilesOrderByWithAggregationInputObjectSchema = Schema;
