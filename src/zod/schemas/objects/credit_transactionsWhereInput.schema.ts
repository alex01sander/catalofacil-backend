import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { Credit_accountsRelationFilterObjectSchema } from './Credit_accountsRelationFilter.schema';
import { credit_accountsWhereInputObjectSchema } from './credit_accountsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_transactionsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => credit_transactionsWhereInputObjectSchema),
        z.lazy(() => credit_transactionsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => credit_transactionsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => credit_transactionsWhereInputObjectSchema),
        z.lazy(() => credit_transactionsWhereInputObjectSchema).array(),
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
    credit_accounts: z
      .union([
        z.lazy(() => Credit_accountsRelationFilterObjectSchema),
        z.lazy(() => credit_accountsWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const credit_transactionsWhereInputObjectSchema = Schema;
