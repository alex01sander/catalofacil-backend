import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.audit_log_entriesMinOrderByAggregateInput> = z
  .object({
    instance_id: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    ip_address: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const audit_log_entriesMinOrderByAggregateInputObjectSchema = Schema;
