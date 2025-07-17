import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    slug: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    products: z
      .lazy(() => ProductOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DomainOrderByWithRelationInputObjectSchema = Schema;
