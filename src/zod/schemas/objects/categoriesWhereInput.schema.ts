import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { StoresRelationFilterObjectSchema } from './StoresRelationFilter.schema';
import { storesWhereInputObjectSchema } from './storesWhereInput.schema';
import { UsersRelationFilterObjectSchema } from './UsersRelationFilter.schema';
import { usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { ProductsListRelationFilterObjectSchema } from './ProductsListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => categoriesWhereInputObjectSchema),
        z.lazy(() => categoriesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => categoriesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => categoriesWhereInputObjectSchema),
        z.lazy(() => categoriesWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    user_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    color: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    image: z
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
    store_id: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
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
    products: z.lazy(() => ProductsListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const categoriesWhereInputObjectSchema = Schema;
