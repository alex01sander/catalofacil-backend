import { z } from 'zod';
import { aal_levelSchema } from '../enums/aal_level.schema';
import { NestedEnumaal_levelNullableWithAggregatesFilterObjectSchema } from './NestedEnumaal_levelNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumaal_levelNullableFilterObjectSchema } from './NestedEnumaal_levelNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Enumaal_levelNullableWithAggregatesFilter> = z
  .object({
    equals: z
      .lazy(() => aal_levelSchema)
      .optional()
      .nullable(),
    in: z
      .union([
        z.lazy(() => aal_levelSchema).array(),
        z.lazy(() => aal_levelSchema),
      ])
      .optional()
      .nullable(),
    notIn: z
      .union([
        z.lazy(() => aal_levelSchema).array(),
        z.lazy(() => aal_levelSchema),
      ])
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => aal_levelSchema),
        z.lazy(
          () => NestedEnumaal_levelNullableWithAggregatesFilterObjectSchema,
        ),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z
      .lazy(() => NestedEnumaal_levelNullableFilterObjectSchema)
      .optional(),
    _max: z
      .lazy(() => NestedEnumaal_levelNullableFilterObjectSchema)
      .optional(),
  })
  .strict();

export const Enumaal_levelNullableWithAggregatesFilterObjectSchema = Schema;
