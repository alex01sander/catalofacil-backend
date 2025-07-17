import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Refresh_tokensAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict();

export const Refresh_tokensAvgAggregateInputObjectSchema = Schema;
