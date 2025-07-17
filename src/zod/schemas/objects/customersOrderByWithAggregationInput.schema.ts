import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { customersCountOrderByAggregateInputObjectSchema } from './customersCountOrderByAggregateInput.schema';
import { customersMaxOrderByAggregateInputObjectSchema } from './customersMaxOrderByAggregateInput.schema';
import { customersMinOrderByAggregateInputObjectSchema } from './customersMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    store_owner_id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z
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
    address: z
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
    store_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => customersCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => customersMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => customersMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const customersOrderByWithAggregationInputObjectSchema = Schema;
