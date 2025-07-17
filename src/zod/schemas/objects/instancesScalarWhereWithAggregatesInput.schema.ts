import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { UuidNullableWithAggregatesFilterObjectSchema } from './UuidNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.instancesScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => instancesScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => instancesScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => instancesScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => instancesScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => instancesScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    uuid: z
      .union([
        z.lazy(() => UuidNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    raw_base_config: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    created_at: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    updated_at: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const instancesScalarWhereWithAggregatesInputObjectSchema = Schema;
