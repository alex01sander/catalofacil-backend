import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.store_settingsWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string().optional(),
  })
  .strict();

export const store_settingsWhereUniqueInputObjectSchema = Schema;
