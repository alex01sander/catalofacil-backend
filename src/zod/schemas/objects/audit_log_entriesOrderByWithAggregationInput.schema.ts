import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { audit_log_entriesCountOrderByAggregateInputObjectSchema } from './audit_log_entriesCountOrderByAggregateInput.schema';
import { audit_log_entriesMaxOrderByAggregateInputObjectSchema } from './audit_log_entriesMaxOrderByAggregateInput.schema';
import { audit_log_entriesMinOrderByAggregateInputObjectSchema } from './audit_log_entriesMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.audit_log_entriesOrderByWithAggregationInput> = z
  .object({
    instance_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    payload: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    created_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    ip_address: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => audit_log_entriesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => audit_log_entriesMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => audit_log_entriesMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const audit_log_entriesOrderByWithAggregationInputObjectSchema = Schema;
