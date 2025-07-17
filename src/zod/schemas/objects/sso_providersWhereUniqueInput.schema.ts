import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const sso_providersWhereUniqueInputObjectSchema = Schema;
