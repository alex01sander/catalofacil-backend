import { z } from 'zod';
import { ordersUncheckedCreateNestedManyWithoutCustomersInputObjectSchema } from './ordersUncheckedCreateNestedManyWithoutCustomersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersUncheckedCreateWithoutUsersInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    store_id: z.string().optional().nullable(),
    orders: z
      .lazy(
        () => ordersUncheckedCreateNestedManyWithoutCustomersInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const customersUncheckedCreateWithoutUsersInputObjectSchema = Schema;
