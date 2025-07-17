import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { order_itemsOrderByRelationAggregateInputObjectSchema } from './order_itemsOrderByRelationAggregateInput.schema';
import { categoriesOrderByWithRelationInputObjectSchema } from './categoriesOrderByWithRelationInput.schema';
import { storesOrderByWithRelationInputObjectSchema } from './storesOrderByWithRelationInput.schema';
import { usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    category_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    stock: z.lazy(() => SortOrderSchema).optional(),
    is_active: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    image: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    images: z.lazy(() => SortOrderSchema).optional(),
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
    store_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    order_items: z
      .lazy(() => order_itemsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    categories: z
      .lazy(() => categoriesOrderByWithRelationInputObjectSchema)
      .optional(),
    stores: z.lazy(() => storesOrderByWithRelationInputObjectSchema).optional(),
    users: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const productsOrderByWithRelationInputObjectSchema = Schema;
