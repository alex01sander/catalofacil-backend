import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    slug: z.lazy(() => SortOrderSchema).optional(),
    domain: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    logo_url: z.lazy(() => SortOrderSchema).optional(),
    banner_url: z.lazy(() => SortOrderSchema).optional(),
    whatsapp_number: z.lazy(() => SortOrderSchema).optional(),
    instagram_url: z.lazy(() => SortOrderSchema).optional(),
    theme_color: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const storesCountOrderByAggregateInputObjectSchema = Schema;
