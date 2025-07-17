import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    slug: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
  })
  .strict();

export const DomainMaxAggregateInputObjectSchema = Schema;
