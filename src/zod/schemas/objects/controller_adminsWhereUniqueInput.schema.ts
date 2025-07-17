import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.controller_adminsWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string().optional(),
    email: z.string().optional(),
  })
  .strict();

export const controller_adminsWhereUniqueInputObjectSchema = Schema;
