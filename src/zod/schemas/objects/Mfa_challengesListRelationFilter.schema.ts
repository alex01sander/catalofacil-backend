import { z } from 'zod';
import { mfa_challengesWhereInputObjectSchema } from './mfa_challengesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Mfa_challengesListRelationFilter> = z
  .object({
    every: z.lazy(() => mfa_challengesWhereInputObjectSchema).optional(),
    some: z.lazy(() => mfa_challengesWhereInputObjectSchema).optional(),
    none: z.lazy(() => mfa_challengesWhereInputObjectSchema).optional(),
  })
  .strict();

export const Mfa_challengesListRelationFilterObjectSchema = Schema;
