import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { SessionsRelationFilterObjectSchema } from './SessionsRelationFilter.schema';
import { sessionsWhereInputObjectSchema } from './sessionsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => mfa_amr_claimsWhereInputObjectSchema),
        z.lazy(() => mfa_amr_claimsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => mfa_amr_claimsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => mfa_amr_claimsWhereInputObjectSchema),
        z.lazy(() => mfa_amr_claimsWhereInputObjectSchema).array(),
      ])
      .optional(),
    session_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    authentication_method: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    sessions: z
      .union([
        z.lazy(() => SessionsRelationFilterObjectSchema),
        z.lazy(() => sessionsWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const mfa_amr_claimsWhereInputObjectSchema = Schema;
