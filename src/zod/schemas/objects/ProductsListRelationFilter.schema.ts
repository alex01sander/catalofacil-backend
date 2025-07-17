import { z } from 'zod';
import { productsWhereInputObjectSchema } from './productsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsListRelationFilter> = z
  .object({
    every: z.lazy(() => productsWhereInputObjectSchema).optional(),
    some: z.lazy(() => productsWhereInputObjectSchema).optional(),
    none: z.lazy(() => productsWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProductsListRelationFilterObjectSchema = Schema;
