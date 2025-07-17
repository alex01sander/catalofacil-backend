import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    slug: z.string(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const DomainCreateManyUserInputObjectSchema = Schema;
