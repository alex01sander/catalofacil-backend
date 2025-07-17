import { z } from 'zod';
import { factor_statusSchema } from '../enums/factor_status.schema';
import { NestedEnumfactor_statusWithAggregatesFilterObjectSchema } from './NestedEnumfactor_statusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumfactor_statusFilterObjectSchema } from './NestedEnumfactor_statusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Enumfactor_statusWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => factor_statusSchema).optional(),
    in: z
      .union([
        z.lazy(() => factor_statusSchema).array(),
        z.lazy(() => factor_statusSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => factor_statusSchema).array(),
        z.lazy(() => factor_statusSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => factor_statusSchema),
        z.lazy(() => NestedEnumfactor_statusWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumfactor_statusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumfactor_statusFilterObjectSchema).optional(),
  })
  .strict();

export const Enumfactor_statusWithAggregatesFilterObjectSchema = Schema;
