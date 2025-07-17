import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UsersRelationFilterObjectSchema } from './UsersRelationFilter.schema';
import { usersWhereInputObjectSchema } from './usersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.controller_adminsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => controller_adminsWhereInputObjectSchema),
        z.lazy(() => controller_adminsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => controller_adminsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => controller_adminsWhereInputObjectSchema),
        z.lazy(() => controller_adminsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    user_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    users: z
      .union([
        z.lazy(() => UsersRelationFilterObjectSchema),
        z.lazy(() => usersWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const controller_adminsWhereInputObjectSchema = Schema;
