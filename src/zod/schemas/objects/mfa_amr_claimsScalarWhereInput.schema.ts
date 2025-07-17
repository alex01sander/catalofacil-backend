import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => mfa_amr_claimsScalarWhereInputObjectSchema),
        z.lazy(() => mfa_amr_claimsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => mfa_amr_claimsScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => mfa_amr_claimsScalarWhereInputObjectSchema),
        z.lazy(() => mfa_amr_claimsScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const mfa_amr_claimsScalarWhereInputObjectSchema = Schema;
