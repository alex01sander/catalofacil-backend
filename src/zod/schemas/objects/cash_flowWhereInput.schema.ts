import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cash_flowWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => cash_flowWhereInputObjectSchema),
        z.lazy(() => cash_flowWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => cash_flowWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => cash_flowWhereInputObjectSchema),
        z.lazy(() => cash_flowWhereInputObjectSchema).array(),
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
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    category: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    amount: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    payment_method: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const cash_flowWhereInputObjectSchema = Schema;
