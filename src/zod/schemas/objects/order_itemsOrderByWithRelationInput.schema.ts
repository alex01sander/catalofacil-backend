import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ordersOrderByWithRelationInputObjectSchema } from './ordersOrderByWithRelationInput.schema';
import { productsOrderByWithRelationInputObjectSchema } from './productsOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    order_id: z.lazy(() => SortOrderSchema).optional(),
    product_id: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    unit_price: z.lazy(() => SortOrderSchema).optional(),
    total_price: z.lazy(() => SortOrderSchema).optional(),
    created_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    orders: z.lazy(() => ordersOrderByWithRelationInputObjectSchema).optional(),
    products: z
      .lazy(() => productsOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const order_itemsOrderByWithRelationInputObjectSchema = Schema;
