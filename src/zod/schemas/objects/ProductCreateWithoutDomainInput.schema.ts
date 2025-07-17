import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateWithoutDomainInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    imageUrl: z.string(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const ProductCreateWithoutDomainInputObjectSchema = Schema;
