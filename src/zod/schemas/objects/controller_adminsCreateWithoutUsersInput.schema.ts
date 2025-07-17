import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.controller_adminsCreateWithoutUsersInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  })
  .strict();

export const controller_adminsCreateWithoutUsersInputObjectSchema = Schema;
