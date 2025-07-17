import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.refresh_tokensWhereUniqueInput> = z
  .object({
    id: z.bigint().optional(),
    token: z.string().optional(),
  })
  .strict();

export const refresh_tokensWhereUniqueInputObjectSchema = Schema;
