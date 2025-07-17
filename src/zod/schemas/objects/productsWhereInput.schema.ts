import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { Order_itemsListRelationFilterObjectSchema } from './Order_itemsListRelationFilter.schema';
import { CategoriesRelationFilterObjectSchema } from './CategoriesRelationFilter.schema';
import { categoriesWhereInputObjectSchema } from './categoriesWhereInput.schema';
import { StoresRelationFilterObjectSchema } from './StoresRelationFilter.schema';
import { storesWhereInputObjectSchema } from './storesWhereInput.schema';
import { UsersRelationFilterObjectSchema } from './UsersRelationFilter.schema';
import { usersWhereInputObjectSchema } from './usersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => productsWhereInputObjectSchema),
        z.lazy(() => productsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => productsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => productsWhereInputObjectSchema),
        z.lazy(() => productsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    user_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    category_id: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    price: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    stock: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    is_active: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    images: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
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
    categories: z
      .union([
        z.lazy(() => CategoriesRelationFilterObjectSchema),
        z.lazy(() => categoriesWhereInputObjectSchema),
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

export const productsWhereInputObjectSchema = Schema;
