import { z } from 'zod';
import { categoriesWhereInputObjectSchema } from './categoriesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoriesRelationFilter> = z
  .object({
    is: z
      .lazy(() => categoriesWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => categoriesWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const CategoriesRelationFilterObjectSchema = Schema;
