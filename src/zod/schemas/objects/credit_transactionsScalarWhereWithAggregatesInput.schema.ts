import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_transactionsScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => credit_transactionsScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                credit_transactionsScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () => credit_transactionsScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => credit_transactionsScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                credit_transactionsScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
      credit_account_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
      user_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
      type: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      amount: z
        .union([
          z.lazy(() => DecimalWithAggregatesFilterObjectSchema),
          z.number(),
        ])
        .optional(),
      description: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      date: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
      created_at: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const credit_transactionsScalarWhereWithAggregatesInputObjectSchema =
  Schema;
