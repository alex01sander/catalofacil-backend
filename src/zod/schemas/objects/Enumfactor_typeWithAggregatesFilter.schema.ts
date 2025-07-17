import { z } from 'zod';
import { factor_typeSchema } from '../enums/factor_type.schema';
import { NestedEnumfactor_typeWithAggregatesFilterObjectSchema } from './NestedEnumfactor_typeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumfactor_typeFilterObjectSchema } from './NestedEnumfactor_typeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Enumfactor_typeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => factor_typeSchema).optional(),
    in: z
      .union([
        z.lazy(() => factor_typeSchema).array(),
        z.lazy(() => factor_typeSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => factor_typeSchema).array(),
        z.lazy(() => factor_typeSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => factor_typeSchema),
        z.lazy(() => NestedEnumfactor_typeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumfactor_typeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumfactor_typeFilterObjectSchema).optional(),
  })
  .strict();

export const Enumfactor_typeWithAggregatesFilterObjectSchema = Schema;
