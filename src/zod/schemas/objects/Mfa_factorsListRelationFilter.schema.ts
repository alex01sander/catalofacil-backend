import { z } from 'zod';
import { mfa_factorsWhereInputObjectSchema } from './mfa_factorsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Mfa_factorsListRelationFilter> = z
  .object({
    every: z.lazy(() => mfa_factorsWhereInputObjectSchema).optional(),
    some: z.lazy(() => mfa_factorsWhereInputObjectSchema).optional(),
    none: z.lazy(() => mfa_factorsWhereInputObjectSchema).optional(),
  })
  .strict();

export const Mfa_factorsListRelationFilterObjectSchema = Schema;
