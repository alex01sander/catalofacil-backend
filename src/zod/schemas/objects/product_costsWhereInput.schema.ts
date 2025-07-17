import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.product_costsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => product_costsWhereInputObjectSchema),
        z.lazy(() => product_costsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => product_costsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => product_costsWhereInputObjectSchema),
        z.lazy(() => product_costsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    user_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    store_id: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    product_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    cost_price: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    desired_margin: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    suggested_price: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const product_costsWhereInputObjectSchema = Schema;
