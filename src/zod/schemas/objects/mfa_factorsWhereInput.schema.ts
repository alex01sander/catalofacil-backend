import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { Enumfactor_typeFilterObjectSchema } from './Enumfactor_typeFilter.schema';
import { factor_typeSchema } from '../enums/factor_type.schema';
import { Enumfactor_statusFilterObjectSchema } from './Enumfactor_statusFilter.schema';
import { factor_statusSchema } from '../enums/factor_status.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { Mfa_challengesListRelationFilterObjectSchema } from './Mfa_challengesListRelationFilter.schema';
import { UsersRelationFilterObjectSchema } from './UsersRelationFilter.schema';
import { usersWhereInputObjectSchema } from './usersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => mfa_factorsWhereInputObjectSchema),
        z.lazy(() => mfa_factorsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => mfa_factorsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => mfa_factorsWhereInputObjectSchema),
        z.lazy(() => mfa_factorsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    user_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    friendly_name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    factor_type: z
      .union([
        z.lazy(() => Enumfactor_typeFilterObjectSchema),
        z.lazy(() => factor_typeSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => Enumfactor_statusFilterObjectSchema),
        z.lazy(() => factor_statusSchema),
      ])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    secret: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    phone: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    last_challenged_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    web_authn_credential: z
      .lazy(() => JsonNullableFilterObjectSchema)
      .optional(),
    web_authn_aaguid: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    mfa_challenges: z
      .lazy(() => Mfa_challengesListRelationFilterObjectSchema)
      .optional(),
    users: z
      .union([
        z.lazy(() => UsersRelationFilterObjectSchema),
        z.lazy(() => usersWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const mfa_factorsWhereInputObjectSchema = Schema;
