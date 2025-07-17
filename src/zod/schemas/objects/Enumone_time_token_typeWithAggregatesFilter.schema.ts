import { z } from 'zod';
import { one_time_token_typeSchema } from '../enums/one_time_token_type.schema';
import { NestedEnumone_time_token_typeWithAggregatesFilterObjectSchema } from './NestedEnumone_time_token_typeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumone_time_token_typeFilterObjectSchema } from './NestedEnumone_time_token_typeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Enumone_time_token_typeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => one_time_token_typeSchema).optional(),
    in: z
      .union([
        z.lazy(() => one_time_token_typeSchema).array(),
        z.lazy(() => one_time_token_typeSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => one_time_token_typeSchema).array(),
        z.lazy(() => one_time_token_typeSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => one_time_token_typeSchema),
        z.lazy(
          () => NestedEnumone_time_token_typeWithAggregatesFilterObjectSchema,
        ),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z
      .lazy(() => NestedEnumone_time_token_typeFilterObjectSchema)
      .optional(),
    _max: z
      .lazy(() => NestedEnumone_time_token_typeFilterObjectSchema)
      .optional(),
  })
  .strict();

export const Enumone_time_token_typeWithAggregatesFilterObjectSchema = Schema;
