import { z } from 'zod';
import { one_time_tokensWhereInputObjectSchema } from './one_time_tokensWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.One_time_tokensListRelationFilter> = z
  .object({
    every: z.lazy(() => one_time_tokensWhereInputObjectSchema).optional(),
    some: z.lazy(() => one_time_tokensWhereInputObjectSchema).optional(),
    none: z.lazy(() => one_time_tokensWhereInputObjectSchema).optional(),
  })
  .strict();

export const One_time_tokensListRelationFilterObjectSchema = Schema;
