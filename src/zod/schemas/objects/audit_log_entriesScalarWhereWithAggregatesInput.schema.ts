import { z } from 'zod';
import { UuidNullableWithAggregatesFilterObjectSchema } from './UuidNullableWithAggregatesFilter.schema';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.audit_log_entriesScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => audit_log_entriesScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => audit_log_entriesScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => audit_log_entriesScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => audit_log_entriesScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => audit_log_entriesScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      instance_id: z
        .union([
          z.lazy(() => UuidNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      id: z
        .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
      payload: z
        .lazy(() => JsonNullableWithAggregatesFilterObjectSchema)
        .optional(),
      created_at: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional()
        .nullable(),
      ip_address: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
    })
    .strict();

export const audit_log_entriesScalarWhereWithAggregatesInputObjectSchema =
  Schema;
