import { z } from 'zod';
import { refresh_tokensWhereInputObjectSchema } from './refresh_tokensWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Refresh_tokensListRelationFilter> = z
  .object({
    every: z.lazy(() => refresh_tokensWhereInputObjectSchema).optional(),
    some: z.lazy(() => refresh_tokensWhereInputObjectSchema).optional(),
    none: z.lazy(() => refresh_tokensWhereInputObjectSchema).optional(),
  })
  .strict();

export const Refresh_tokensListRelationFilterObjectSchema = Schema;
