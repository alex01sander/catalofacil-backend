import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { CategoriesListRelationFilterObjectSchema } from './CategoriesListRelationFilter.schema';
import { CustomersListRelationFilterObjectSchema } from './CustomersListRelationFilter.schema';
import { OrdersListRelationFilterObjectSchema } from './OrdersListRelationFilter.schema';
import { ProductsListRelationFilterObjectSchema } from './ProductsListRelationFilter.schema';
import { SalesListRelationFilterObjectSchema } from './SalesListRelationFilter.schema';
import { UsersRelationFilterObjectSchema } from './UsersRelationFilter.schema';
import { usersWhereInputObjectSchema } from './usersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => storesWhereInputObjectSchema),
        z.lazy(() => storesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => storesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => storesWhereInputObjectSchema),
        z.lazy(() => storesWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    slug: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    domain: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    user_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    logo_url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    banner_url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    whatsapp_number: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    instagram_url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    theme_color: z
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
    categories: z
      .lazy(() => CategoriesListRelationFilterObjectSchema)
      .optional(),
    customers: z.lazy(() => CustomersListRelationFilterObjectSchema).optional(),
    orders: z.lazy(() => OrdersListRelationFilterObjectSchema).optional(),
    products: z.lazy(() => ProductsListRelationFilterObjectSchema).optional(),
    sales: z.lazy(() => SalesListRelationFilterObjectSchema).optional(),
    users: z
      .union([
        z.lazy(() => UsersRelationFilterObjectSchema),
        z.lazy(() => usersWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const storesWhereInputObjectSchema = Schema;
