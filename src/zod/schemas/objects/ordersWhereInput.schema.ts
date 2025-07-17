import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { Order_itemsListRelationFilterObjectSchema } from './Order_itemsListRelationFilter.schema';
import { CustomersRelationFilterObjectSchema } from './CustomersRelationFilter.schema';
import { customersWhereInputObjectSchema } from './customersWhereInput.schema';
import { StoresRelationFilterObjectSchema } from './StoresRelationFilter.schema';
import { storesWhereInputObjectSchema } from './storesWhereInput.schema';
import { UsersRelationFilterObjectSchema } from './UsersRelationFilter.schema';
import { usersWhereInputObjectSchema } from './usersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ordersWhereInputObjectSchema),
        z.lazy(() => ordersWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ordersWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ordersWhereInputObjectSchema),
        z.lazy(() => ordersWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    store_owner_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    customer_id: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    customer_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    customer_email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    customer_phone: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    total_amount: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    status: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    created_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    updated_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    store_id: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    order_items: z
      .lazy(() => Order_itemsListRelationFilterObjectSchema)
      .optional(),
    customers: z
      .union([
        z.lazy(() => CustomersRelationFilterObjectSchema),
        z.lazy(() => customersWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    stores: z
      .union([
        z.lazy(() => StoresRelationFilterObjectSchema),
        z.lazy(() => storesWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    users: z
      .union([
        z.lazy(() => UsersRelationFilterObjectSchema),
        z.lazy(() => usersWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ordersWhereInputObjectSchema = Schema;
