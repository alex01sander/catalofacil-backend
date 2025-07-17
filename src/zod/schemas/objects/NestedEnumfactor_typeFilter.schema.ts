import { z } from 'zod';
import { factor_typeSchema } from '../enums/factor_type.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumfactor_typeFilter> = z
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
        z.lazy(() => NestedEnumfactor_typeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumfactor_typeFilterObjectSchema = Schema;
