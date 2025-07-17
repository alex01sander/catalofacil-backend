import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    slug: z.string().optional(),
    domain: z.string().optional(),
  })
  .strict();

export const storesWhereUniqueInputObjectSchema = Schema;
