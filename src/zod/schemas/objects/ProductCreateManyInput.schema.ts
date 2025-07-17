import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateManyInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    imageUrl: z.string(),
    domainId: z.string(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const ProductCreateManyInputObjectSchema = Schema;
