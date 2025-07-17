import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstancesCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    uuid: z.literal(true).optional(),
    raw_base_config: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const InstancesCountAggregateInputObjectSchema = Schema;
