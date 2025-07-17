import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { categoriesOrderByRelationAggregateInputObjectSchema } from './categoriesOrderByRelationAggregateInput.schema';
import { customersOrderByRelationAggregateInputObjectSchema } from './customersOrderByRelationAggregateInput.schema';
import { ordersOrderByRelationAggregateInputObjectSchema } from './ordersOrderByRelationAggregateInput.schema';
import { productsOrderByRelationAggregateInputObjectSchema } from './productsOrderByRelationAggregateInput.schema';
import { salesOrderByRelationAggregateInputObjectSchema } from './salesOrderByRelationAggregateInput.schema';
import { usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesOrderByWithRelationInput> = z
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
    categories: z
      .lazy(() => categoriesOrderByRelationAggregateInputObjectSchema)
      .optional(),
    customers: z
      .lazy(() => customersOrderByRelationAggregateInputObjectSchema)
      .optional(),
    orders: z
      .lazy(() => ordersOrderByRelationAggregateInputObjectSchema)
      .optional(),
    products: z
      .lazy(() => productsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sales: z
      .lazy(() => salesOrderByRelationAggregateInputObjectSchema)
      .optional(),
    users: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const storesOrderByWithRelationInputObjectSchema = Schema;
