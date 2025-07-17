import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    domainId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProductCountOrderByAggregateInputObjectSchema = Schema;
