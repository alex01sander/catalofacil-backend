import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.product_costsWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const product_costsWhereUniqueInputObjectSchema = Schema;
