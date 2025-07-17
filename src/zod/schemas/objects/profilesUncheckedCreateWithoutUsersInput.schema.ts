import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.profilesUncheckedCreateWithoutUsersInput> = z
  .object({
    email: z.string(),
    full_name: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
  })
  .strict();

export const profilesUncheckedCreateWithoutUsersInputObjectSchema = Schema;
