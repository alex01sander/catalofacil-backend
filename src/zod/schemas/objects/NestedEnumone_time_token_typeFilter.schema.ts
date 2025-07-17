import { z } from 'zod';
import { one_time_token_typeSchema } from '../enums/one_time_token_type.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumone_time_token_typeFilter> = z
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
        z.lazy(() => NestedEnumone_time_token_typeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumone_time_token_typeFilterObjectSchema = Schema;
