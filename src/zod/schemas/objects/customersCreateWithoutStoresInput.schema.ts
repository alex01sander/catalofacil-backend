import { z } from 'zod';
import { usersCreateNestedOneWithoutCustomersInputObjectSchema } from './usersCreateNestedOneWithoutCustomersInput.schema';
import { ordersCreateNestedManyWithoutCustomersInputObjectSchema } from './ordersCreateNestedManyWithoutCustomersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersCreateWithoutStoresInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    users: z.lazy(() => usersCreateNestedOneWithoutCustomersInputObjectSchema),
    orders: z
      .lazy(() => ordersCreateNestedManyWithoutCustomersInputObjectSchema)
      .optional(),
  })
  .strict();

export const customersCreateWithoutStoresInputObjectSchema = Schema;
