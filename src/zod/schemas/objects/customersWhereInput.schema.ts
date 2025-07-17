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
import { OrdersListRelationFilterObjectSchema } from './OrdersListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => customersWhereInputObjectSchema),
        z.lazy(() => customersWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => customersWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => customersWhereInputObjectSchema),
        z.lazy(() => customersWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    store_owner_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    phone: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    address: z
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
    orders: z.lazy(() => OrdersListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const customersWhereInputObjectSchema = Schema;
