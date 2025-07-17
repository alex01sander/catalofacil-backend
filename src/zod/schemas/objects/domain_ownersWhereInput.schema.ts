import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UsersRelationFilterObjectSchema } from './UsersRelationFilter.schema';
import { usersWhereInputObjectSchema } from './usersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.domain_ownersWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => domain_ownersWhereInputObjectSchema),
        z.lazy(() => domain_ownersWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => domain_ownersWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => domain_ownersWhereInputObjectSchema),
        z.lazy(() => domain_ownersWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    domain: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
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
    domain_type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    users: z
      .union([
        z.lazy(() => UsersRelationFilterObjectSchema),
        z.lazy(() => usersWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const domain_ownersWhereInputObjectSchema = Schema;
