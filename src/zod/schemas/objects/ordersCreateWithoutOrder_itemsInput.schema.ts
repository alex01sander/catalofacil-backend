import { z } from 'zod';
import { customersCreateNestedOneWithoutOrdersInputObjectSchema } from './customersCreateNestedOneWithoutOrdersInput.schema';
import { storesCreateNestedOneWithoutOrdersInputObjectSchema } from './storesCreateNestedOneWithoutOrdersInput.schema';
import { usersCreateNestedOneWithoutOrdersInputObjectSchema } from './usersCreateNestedOneWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersCreateWithoutOrder_itemsInput> = z
  .object({
    id: z.string().optional(),
    customer_name: z.string(),
    customer_email: z.string().optional().nullable(),
    customer_phone: z.string().optional().nullable(),
    total_amount: z.number().optional(),
    status: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    customers: z
      .lazy(() => customersCreateNestedOneWithoutOrdersInputObjectSchema)
      .optional(),
    stores: z
      .lazy(() => storesCreateNestedOneWithoutOrdersInputObjectSchema)
      .optional(),
    users: z.lazy(() => usersCreateNestedOneWithoutOrdersInputObjectSchema),
  })
  .strict();

export const ordersCreateWithoutOrder_itemsInputObjectSchema = Schema;
