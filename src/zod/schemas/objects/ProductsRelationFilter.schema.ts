import { z } from 'zod';
import { productsWhereInputObjectSchema } from './productsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsRelationFilter> = z
  .object({
    is: z
      .lazy(() => productsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => productsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ProductsRelationFilterObjectSchema = Schema;
