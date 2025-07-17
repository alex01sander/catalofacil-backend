import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { storesCountOrderByAggregateInputObjectSchema } from './storesCountOrderByAggregateInput.schema';
import { storesMaxOrderByAggregateInputObjectSchema } from './storesMaxOrderByAggregateInput.schema';
import { storesMinOrderByAggregateInputObjectSchema } from './storesMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    slug: z.lazy(() => SortOrderSchema).optional(),
    domain: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    logo_url: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    banner_url: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    whatsapp_number: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    instagram_url: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    theme_color: z
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
      .lazy(() => storesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => storesMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => storesMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const storesOrderByWithAggregationInputObjectSchema = Schema;
