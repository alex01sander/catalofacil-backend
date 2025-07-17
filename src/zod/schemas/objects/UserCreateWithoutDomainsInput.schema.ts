import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutDomainsInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    password: z.string(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const UserCreateWithoutDomainsInputObjectSchema = Schema;
