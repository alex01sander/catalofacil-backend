import { z } from 'zod';
import { categoriesCreateNestedManyWithoutStoresInputObjectSchema } from './categoriesCreateNestedManyWithoutStoresInput.schema';
import { ordersCreateNestedManyWithoutStoresInputObjectSchema } from './ordersCreateNestedManyWithoutStoresInput.schema';
import { productsCreateNestedManyWithoutStoresInputObjectSchema } from './productsCreateNestedManyWithoutStoresInput.schema';
import { salesCreateNestedManyWithoutStoresInputObjectSchema } from './salesCreateNestedManyWithoutStoresInput.schema';
import { usersCreateNestedOneWithoutStoresInputObjectSchema } from './usersCreateNestedOneWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesCreateWithoutCustomersInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    slug: z.string(),
    domain: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    logo_url: z.string().optional().nullable(),
    banner_url: z.string().optional().nullable(),
    whatsapp_number: z.string().optional().nullable(),
    instagram_url: z.string().optional().nullable(),
    theme_color: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    categories: z
      .lazy(() => categoriesCreateNestedManyWithoutStoresInputObjectSchema)
      .optional(),
    orders: z
      .lazy(() => ordersCreateNestedManyWithoutStoresInputObjectSchema)
      .optional(),
    products: z
      .lazy(() => productsCreateNestedManyWithoutStoresInputObjectSchema)
      .optional(),
    sales: z
      .lazy(() => salesCreateNestedManyWithoutStoresInputObjectSchema)
      .optional(),
    users: z.lazy(() => usersCreateNestedOneWithoutStoresInputObjectSchema),
  })
  .strict();

export const storesCreateWithoutCustomersInputObjectSchema = Schema;
