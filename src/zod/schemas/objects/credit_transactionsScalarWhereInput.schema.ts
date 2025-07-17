import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_transactionsScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => credit_transactionsScalarWhereInputObjectSchema),
        z.lazy(() => credit_transactionsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => credit_transactionsScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => credit_transactionsScalarWhereInputObjectSchema),
        z.lazy(() => credit_transactionsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    credit_account_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    amount: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const credit_transactionsScalarWhereInputObjectSchema = Schema;
