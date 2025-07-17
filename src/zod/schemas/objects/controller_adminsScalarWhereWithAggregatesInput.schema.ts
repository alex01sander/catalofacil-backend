import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.controller_adminsScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => controller_adminsScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => controller_adminsScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => controller_adminsScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => controller_adminsScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => controller_adminsScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
      user_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
      email: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      created_at: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
      updated_at: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const controller_adminsScalarWhereWithAggregatesInputObjectSchema =
  Schema;
