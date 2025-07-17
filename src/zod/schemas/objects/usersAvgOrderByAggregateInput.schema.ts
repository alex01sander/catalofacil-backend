import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersAvgOrderByAggregateInput> = z
  .object({
    email_change_confirm_status: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const usersAvgOrderByAggregateInputObjectSchema = Schema;
