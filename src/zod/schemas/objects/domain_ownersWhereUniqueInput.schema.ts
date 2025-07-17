import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.domain_ownersWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    domain: z.string().optional(),
  })
  .strict();

export const domain_ownersWhereUniqueInputObjectSchema = Schema;
