import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { UuidNullableWithAggregatesFilterObjectSchema } from './UuidNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_accountsScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => credit_accountsScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => credit_accountsScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => credit_accountsScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => credit_accountsScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => credit_accountsScalarWhereWithAggregatesInputObjectSchema,
            )
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
      customer_name: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      customer_phone: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      total_debt: z
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
      status: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
    })
    .strict();

export const credit_accountsScalarWhereWithAggregatesInputObjectSchema = Schema;
