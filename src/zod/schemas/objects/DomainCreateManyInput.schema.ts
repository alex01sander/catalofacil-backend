import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainCreateManyInput> = z
  .object({
    id: z.string().optional(),
    slug: z.string(),
    userId: z.string(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const DomainCreateManyInputObjectSchema = Schema;
