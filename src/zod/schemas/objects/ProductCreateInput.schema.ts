import { z } from 'zod';
import { DomainCreateNestedOneWithoutProductsInputObjectSchema } from './DomainCreateNestedOneWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    imageUrl: z.string(),
    createdAt: z.coerce.date().optional(),
    domain: z.lazy(() => DomainCreateNestedOneWithoutProductsInputObjectSchema),
  })
  .strict();

export const ProductCreateInputObjectSchema = Schema;
