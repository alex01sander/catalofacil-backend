import { z } from 'zod';
import { order_itemsUncheckedCreateNestedManyWithoutOrdersInputObjectSchema } from './order_itemsUncheckedCreateNestedManyWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersUncheckedCreateWithoutStoresInput> = z
  .object({
    id: z.string().optional(),
    store_owner_id: z.string(),
    customer_id: z.string().optional().nullable(),
    customer_name: z.string(),
    customer_email: z.string().optional().nullable(),
    customer_phone: z.string().optional().nullable(),
    total_amount: z.number().optional(),
    status: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    order_items: z
      .lazy(
        () =>
          order_itemsUncheckedCreateNestedManyWithoutOrdersInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ordersUncheckedCreateWithoutStoresInputObjectSchema = Schema;
