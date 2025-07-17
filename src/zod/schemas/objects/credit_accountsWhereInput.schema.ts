import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { Credit_transactionsListRelationFilterObjectSchema } from './Credit_transactionsListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_accountsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => credit_accountsWhereInputObjectSchema),
        z.lazy(() => credit_accountsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => credit_accountsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => credit_accountsWhereInputObjectSchema),
        z.lazy(() => credit_accountsWhereInputObjectSchema).array(),
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
    customer_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    customer_phone: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    total_debt: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    credit_transactions: z
      .lazy(() => Credit_transactionsListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const credit_accountsWhereInputObjectSchema = Schema;
