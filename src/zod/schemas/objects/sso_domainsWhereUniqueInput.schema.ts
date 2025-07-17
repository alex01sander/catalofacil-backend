import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_domainsWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const sso_domainsWhereUniqueInputObjectSchema = Schema;
