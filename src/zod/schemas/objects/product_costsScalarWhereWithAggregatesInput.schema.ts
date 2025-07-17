import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { UuidNullableWithAggregatesFilterObjectSchema } from './UuidNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.product_costsScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => product_costsScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => product_costsScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => product_costsScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => product_costsScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => product_costsScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    store_id: z
      .union([
        z.lazy(() => UuidNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    product_name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    cost_price: z
      .union([
        z.lazy(() => DecimalWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional(),
    desired_margin: z
      .union([
        z.lazy(() => DecimalWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional(),
    suggested_price: z
      .union([
        z.lazy(() => DecimalWithAggregatesFilterObjectSchema),
        z.number(),
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

export const product_costsScalarWhereWithAggregatesInputObjectSchema = Schema;
