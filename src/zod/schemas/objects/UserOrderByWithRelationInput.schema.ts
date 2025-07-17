import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DomainOrderByRelationAggregateInputObjectSchema } from './DomainOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    domains: z
      .lazy(() => DomainOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
