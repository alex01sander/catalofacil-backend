import { z } from 'zod';
import { factor_statusSchema } from '../enums/factor_status.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumfactor_statusFilter> = z
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
        z.lazy(() => NestedEnumfactor_statusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumfactor_statusFilterObjectSchema = Schema;
