import { z } from 'zod';
import { categoriesWhereInputObjectSchema } from './categoriesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoriesListRelationFilter> = z
  .object({
    every: z.lazy(() => categoriesWhereInputObjectSchema).optional(),
    some: z.lazy(() => categoriesWhereInputObjectSchema).optional(),
    none: z.lazy(() => categoriesWhereInputObjectSchema).optional(),
  })
  .strict();

export const CategoriesListRelationFilterObjectSchema = Schema;
