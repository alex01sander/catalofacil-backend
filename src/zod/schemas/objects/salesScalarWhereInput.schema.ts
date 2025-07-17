import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.salesScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => salesScalarWhereInputObjectSchema),
        z.lazy(() => salesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => salesScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => salesScalarWhereInputObjectSchema),
        z.lazy(() => salesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    user_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    product_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    quantity: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    unit_price: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    total_price: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    sale_date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    store_id: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const salesScalarWhereInputObjectSchema = Schema;
