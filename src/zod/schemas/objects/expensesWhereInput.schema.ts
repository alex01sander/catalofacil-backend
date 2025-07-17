import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.expensesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => expensesWhereInputObjectSchema),
        z.lazy(() => expensesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => expensesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => expensesWhereInputObjectSchema),
        z.lazy(() => expensesWhereInputObjectSchema).array(),
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
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    category: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    amount: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    due_date: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    is_recurring: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    recurring_frequency: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    status: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    paid_date: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
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

export const expensesWhereInputObjectSchema = Schema;
