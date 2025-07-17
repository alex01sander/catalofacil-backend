import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { OrdersRelationFilterObjectSchema } from './OrdersRelationFilter.schema';
import { ordersWhereInputObjectSchema } from './ordersWhereInput.schema';
import { ProductsRelationFilterObjectSchema } from './ProductsRelationFilter.schema';
import { productsWhereInputObjectSchema } from './productsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => order_itemsWhereInputObjectSchema),
        z.lazy(() => order_itemsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => order_itemsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => order_itemsWhereInputObjectSchema),
        z.lazy(() => order_itemsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    order_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    product_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    quantity: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    unit_price: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    total_price: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    created_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    orders: z
      .union([
        z.lazy(() => OrdersRelationFilterObjectSchema),
        z.lazy(() => ordersWhereInputObjectSchema),
      ])
      .optional(),
    products: z
      .union([
        z.lazy(() => ProductsRelationFilterObjectSchema),
        z.lazy(() => productsWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const order_itemsWhereInputObjectSchema = Schema;
