import { z } from 'zod';
import { storesCreateNestedOneWithoutCustomersInputObjectSchema } from './storesCreateNestedOneWithoutCustomersInput.schema';
import { usersCreateNestedOneWithoutCustomersInputObjectSchema } from './usersCreateNestedOneWithoutCustomersInput.schema';
import { ordersCreateNestedManyWithoutCustomersInputObjectSchema } from './ordersCreateNestedManyWithoutCustomersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    stores: z
      .lazy(() => storesCreateNestedOneWithoutCustomersInputObjectSchema)
      .optional(),
    users: z.lazy(() => usersCreateNestedOneWithoutCustomersInputObjectSchema),
    orders: z
      .lazy(() => ordersCreateNestedManyWithoutCustomersInputObjectSchema)
      .optional(),
  })
  .strict();

export const customersCreateInputObjectSchema = Schema;
