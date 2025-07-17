import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UsersRelationFilterObjectSchema } from './UsersRelationFilter.schema';
import { usersWhereInputObjectSchema } from './usersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.identitiesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => identitiesWhereInputObjectSchema),
        z.lazy(() => identitiesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => identitiesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => identitiesWhereInputObjectSchema),
        z.lazy(() => identitiesWhereInputObjectSchema).array(),
      ])
      .optional(),
    provider_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    identity_data: z.lazy(() => JsonFilterObjectSchema).optional(),
    provider: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    last_sign_in_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
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
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    users: z
      .union([
        z.lazy(() => UsersRelationFilterObjectSchema),
        z.lazy(() => usersWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const identitiesWhereInputObjectSchema = Schema;
