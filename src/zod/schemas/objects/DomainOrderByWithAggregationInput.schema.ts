import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DomainCountOrderByAggregateInputObjectSchema } from './DomainCountOrderByAggregateInput.schema';
import { DomainMaxOrderByAggregateInputObjectSchema } from './DomainMaxOrderByAggregateInput.schema';
import { DomainMinOrderByAggregateInputObjectSchema } from './DomainMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    slug: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DomainCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => DomainMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DomainMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const DomainOrderByWithAggregationInputObjectSchema = Schema;
