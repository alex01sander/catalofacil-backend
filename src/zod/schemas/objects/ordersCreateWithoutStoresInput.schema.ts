import { z } from 'zod';
import { order_itemsCreateNestedManyWithoutOrdersInputObjectSchema } from './order_itemsCreateNestedManyWithoutOrdersInput.schema';
import { customersCreateNestedOneWithoutOrdersInputObjectSchema } from './customersCreateNestedOneWithoutOrdersInput.schema';
import { usersCreateNestedOneWithoutOrdersInputObjectSchema } from './usersCreateNestedOneWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersCreateWithoutStoresInput> = z
  .object({
    id: z.string().optional(),
    customer_name: z.string(),
    customer_email: z.string().optional().nullable(),
    customer_phone: z.string().optional().nullable(),
    total_amount: z.number().optional(),
    status: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    order_items: z
      .lazy(() => order_itemsCreateNestedManyWithoutOrdersInputObjectSchema)
      .optional(),
    customers: z
      .lazy(() => customersCreateNestedOneWithoutOrdersInputObjectSchema)
      .optional(),
    users: z.lazy(() => usersCreateNestedOneWithoutOrdersInputObjectSchema),
  })
  .strict();

export const ordersCreateWithoutStoresInputObjectSchema = Schema;
