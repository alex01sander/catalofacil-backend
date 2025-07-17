import { z } from 'zod';
import { aal_levelSchema } from '../enums/aal_level.schema';
import { NestedEnumaal_levelNullableFilterObjectSchema } from './NestedEnumaal_levelNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Enumaal_levelNullableFilter> = z
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
        z.lazy(() => NestedEnumaal_levelNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const Enumaal_levelNullableFilterObjectSchema = Schema;
