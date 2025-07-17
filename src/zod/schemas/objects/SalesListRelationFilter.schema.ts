import { z } from 'zod';
import { salesWhereInputObjectSchema } from './salesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalesListRelationFilter> = z
  .object({
    every: z.lazy(() => salesWhereInputObjectSchema).optional(),
    some: z.lazy(() => salesWhereInputObjectSchema).optional(),
    none: z.lazy(() => salesWhereInputObjectSchema).optional(),
  })
  .strict();

export const SalesListRelationFilterObjectSchema = Schema;
