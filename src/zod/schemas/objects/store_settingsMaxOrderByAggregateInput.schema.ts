import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.store_settingsMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    store_name: z.lazy(() => SortOrderSchema).optional(),
    store_description: z.lazy(() => SortOrderSchema).optional(),
    mobile_logo: z.lazy(() => SortOrderSchema).optional(),
    desktop_banner: z.lazy(() => SortOrderSchema).optional(),
    mobile_banner_color: z.lazy(() => SortOrderSchema).optional(),
    mobile_banner_image: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    store_subtitle: z.lazy(() => SortOrderSchema).optional(),
    instagram_url: z.lazy(() => SortOrderSchema).optional(),
    whatsapp_number: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const store_settingsMaxOrderByAggregateInputObjectSchema = Schema;
