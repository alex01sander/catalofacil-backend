import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { Enumone_time_token_typeWithAggregatesFilterObjectSchema } from './Enumone_time_token_typeWithAggregatesFilter.schema';
import { one_time_token_typeSchema } from '../enums/one_time_token_type.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => one_time_tokensScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => one_time_tokensScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => one_time_tokensScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => one_time_tokensScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => one_time_tokensScalarWhereWithAggregatesInputObjectSchema,
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
      token_type: z
        .union([
          z.lazy(() => Enumone_time_token_typeWithAggregatesFilterObjectSchema),
          z.lazy(() => one_time_token_typeSchema),
        ])
        .optional(),
      token_hash: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      relates_to: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
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

export const one_time_tokensScalarWhereWithAggregatesInputObjectSchema = Schema;
