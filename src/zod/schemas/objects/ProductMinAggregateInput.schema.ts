import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    price: z.literal(true).optional(),
    imageUrl: z.literal(true).optional(),
    domainId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
  })
  .strict();

export const ProductMinAggregateInputObjectSchema = Schema;
