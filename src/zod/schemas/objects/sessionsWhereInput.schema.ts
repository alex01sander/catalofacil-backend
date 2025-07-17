import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { Enumaal_levelNullableFilterObjectSchema } from './Enumaal_levelNullableFilter.schema';
import { aal_levelSchema } from '../enums/aal_level.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { Mfa_amr_claimsListRelationFilterObjectSchema } from './Mfa_amr_claimsListRelationFilter.schema';
import { Refresh_tokensListRelationFilterObjectSchema } from './Refresh_tokensListRelationFilter.schema';
import { UsersRelationFilterObjectSchema } from './UsersRelationFilter.schema';
import { usersWhereInputObjectSchema } from './usersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => sessionsWhereInputObjectSchema),
        z.lazy(() => sessionsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => sessionsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => sessionsWhereInputObjectSchema),
        z.lazy(() => sessionsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
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
    factor_id: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    aal: z
      .union([
        z.lazy(() => Enumaal_levelNullableFilterObjectSchema),
        z.lazy(() => aal_levelSchema),
      ])
      .optional()
      .nullable(),
    not_after: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    refreshed_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    user_agent: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    ip: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    tag: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    mfa_amr_claims: z
      .lazy(() => Mfa_amr_claimsListRelationFilterObjectSchema)
      .optional(),
    refresh_tokens: z
      .lazy(() => Refresh_tokensListRelationFilterObjectSchema)
      .optional(),
    users: z
      .union([
        z.lazy(() => UsersRelationFilterObjectSchema),
        z.lazy(() => usersWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const sessionsWhereInputObjectSchema = Schema;
