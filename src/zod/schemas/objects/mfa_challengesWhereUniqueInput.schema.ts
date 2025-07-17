import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_challengesWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const mfa_challengesWhereUniqueInputObjectSchema = Schema;
