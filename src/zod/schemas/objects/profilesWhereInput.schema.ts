import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UsersRelationFilterObjectSchema } from './UsersRelationFilter.schema';
import { usersWhereInputObjectSchema } from './usersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.profilesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => profilesWhereInputObjectSchema),
        z.lazy(() => profilesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => profilesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => profilesWhereInputObjectSchema),
        z.lazy(() => profilesWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    full_name: z
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
    users: z
      .union([
        z.lazy(() => UsersRelationFilterObjectSchema),
        z.lazy(() => usersWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const profilesWhereInputObjectSchema = Schema;
