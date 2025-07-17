import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.controller_adminsCreateManyInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string(),
    email: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  })
  .strict();

export const controller_adminsCreateManyInputObjectSchema = Schema;
