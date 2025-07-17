import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensOrderByRelationAggregateInput> = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const one_time_tokensOrderByRelationAggregateInputObjectSchema = Schema;
