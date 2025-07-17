import { z } from 'zod';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.audit_log_entriesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => audit_log_entriesWhereInputObjectSchema),
        z.lazy(() => audit_log_entriesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => audit_log_entriesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => audit_log_entriesWhereInputObjectSchema),
        z.lazy(() => audit_log_entriesWhereInputObjectSchema).array(),
      ])
      .optional(),
    instance_id: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    payload: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
    created_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    ip_address: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const audit_log_entriesWhereInputObjectSchema = Schema;
