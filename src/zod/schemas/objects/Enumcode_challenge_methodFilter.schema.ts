import { z } from 'zod';
import { code_challenge_methodSchema } from '../enums/code_challenge_method.schema';
import { NestedEnumcode_challenge_methodFilterObjectSchema } from './NestedEnumcode_challenge_methodFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Enumcode_challenge_methodFilter> = z
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
        z.lazy(() => NestedEnumcode_challenge_methodFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const Enumcode_challenge_methodFilterObjectSchema = Schema;
