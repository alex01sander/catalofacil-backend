import { z } from 'zod';
import { factor_statusSchema } from '../enums/factor_status.schema';
import { NestedEnumfactor_statusFilterObjectSchema } from './NestedEnumfactor_statusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Enumfactor_statusFilter> = z
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

export const Enumfactor_statusFilterObjectSchema = Schema;
