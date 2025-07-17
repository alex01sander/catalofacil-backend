import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { Mfa_factorsRelationFilterObjectSchema } from './Mfa_factorsRelationFilter.schema';
import { mfa_factorsWhereInputObjectSchema } from './mfa_factorsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_challengesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => mfa_challengesWhereInputObjectSchema),
        z.lazy(() => mfa_challengesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => mfa_challengesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => mfa_challengesWhereInputObjectSchema),
        z.lazy(() => mfa_challengesWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    factor_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    verified_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    ip_address: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    otp_code: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    web_authn_session_data: z
      .lazy(() => JsonNullableFilterObjectSchema)
      .optional(),
    mfa_factors: z
      .union([
        z.lazy(() => Mfa_factorsRelationFilterObjectSchema),
        z.lazy(() => mfa_factorsWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const mfa_challengesWhereInputObjectSchema = Schema;
