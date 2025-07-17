import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.domain_ownersScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => domain_ownersScalarWhereInputObjectSchema),
        z.lazy(() => domain_ownersScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => domain_ownersScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => domain_ownersScalarWhereInputObjectSchema),
        z.lazy(() => domain_ownersScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const domain_ownersScalarWhereInputObjectSchema = Schema;
