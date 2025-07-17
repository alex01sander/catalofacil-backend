import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.product_costsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    store_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    product_name: z.lazy(() => SortOrderSchema).optional(),
    cost_price: z.lazy(() => SortOrderSchema).optional(),
    desired_margin: z.lazy(() => SortOrderSchema).optional(),
    suggested_price: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const product_costsOrderByWithRelationInputObjectSchema = Schema;
