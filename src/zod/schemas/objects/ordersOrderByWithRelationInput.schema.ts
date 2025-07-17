import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { order_itemsOrderByRelationAggregateInputObjectSchema } from './order_itemsOrderByRelationAggregateInput.schema';
import { customersOrderByWithRelationInputObjectSchema } from './customersOrderByWithRelationInput.schema';
import { storesOrderByWithRelationInputObjectSchema } from './storesOrderByWithRelationInput.schema';
import { usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    store_owner_id: z.lazy(() => SortOrderSchema).optional(),
    customer_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    customer_name: z.lazy(() => SortOrderSchema).optional(),
    customer_email: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    customer_phone: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    total_amount: z.lazy(() => SortOrderSchema).optional(),
    status: z
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
    store_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    order_items: z
      .lazy(() => order_itemsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    customers: z
      .lazy(() => customersOrderByWithRelationInputObjectSchema)
      .optional(),
    stores: z.lazy(() => storesOrderByWithRelationInputObjectSchema).optional(),
    users: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const ordersOrderByWithRelationInputObjectSchema = Schema;
