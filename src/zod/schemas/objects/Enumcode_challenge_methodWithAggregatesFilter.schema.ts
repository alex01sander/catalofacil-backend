import { z } from 'zod';
import { code_challenge_methodSchema } from '../enums/code_challenge_method.schema';
import { NestedEnumcode_challenge_methodWithAggregatesFilterObjectSchema } from './NestedEnumcode_challenge_methodWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumcode_challenge_methodFilterObjectSchema } from './NestedEnumcode_challenge_methodFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Enumcode_challenge_methodWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => code_challenge_methodSchema).optional(),
      in: z
        .union([
          z.lazy(() => code_challenge_methodSchema).array(),
          z.lazy(() => code_challenge_methodSchema),
        ])
        .optional(),
      notIn: z
        .union([
          z.lazy(() => code_challenge_methodSchema).array(),
          z.lazy(() => code_challenge_methodSchema),
        ])
        .optional(),
      not: z
        .union([
          z.lazy(() => code_challenge_methodSchema),
          z.lazy(
            () =>
              NestedEnumcode_challenge_methodWithAggregatesFilterObjectSchema,
          ),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumcode_challenge_methodFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumcode_challenge_methodFilterObjectSchema)
        .optional(),
    })
    .strict();

export const Enumcode_challenge_methodWithAggregatesFilterObjectSchema = Schema;
