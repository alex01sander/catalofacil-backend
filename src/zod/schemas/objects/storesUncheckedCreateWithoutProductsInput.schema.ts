import { z } from 'zod';
import { categoriesUncheckedCreateNestedManyWithoutStoresInputObjectSchema } from './categoriesUncheckedCreateNestedManyWithoutStoresInput.schema';
import { customersUncheckedCreateNestedManyWithoutStoresInputObjectSchema } from './customersUncheckedCreateNestedManyWithoutStoresInput.schema';
import { ordersUncheckedCreateNestedManyWithoutStoresInputObjectSchema } from './ordersUncheckedCreateNestedManyWithoutStoresInput.schema';
import { salesUncheckedCreateNestedManyWithoutStoresInputObjectSchema } from './salesUncheckedCreateNestedManyWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUncheckedCreateWithoutProductsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    slug: z.string(),
    domain: z.string().optional().nullable(),
    user_id: z.string(),
    description: z.string().optional().nullable(),
    logo_url: z.string().optional().nullable(),
    banner_url: z.string().optional().nullable(),
    whatsapp_number: z.string().optional().nullable(),
    instagram_url: z.string().optional().nullable(),
    theme_color: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    categories: z
      .lazy(
        () => categoriesUncheckedCreateNestedManyWithoutStoresInputObjectSchema,
      )
      .optional(),
    customers: z
      .lazy(
        () => customersUncheckedCreateNestedManyWithoutStoresInputObjectSchema,
      )
      .optional(),
    orders: z
      .lazy(() => ordersUncheckedCreateNestedManyWithoutStoresInputObjectSchema)
      .optional(),
    sales: z
      .lazy(() => salesUncheckedCreateNestedManyWithoutStoresInputObjectSchema)
      .optional(),
  })
  .strict();

export const storesUncheckedCreateWithoutProductsInputObjectSchema = Schema;
