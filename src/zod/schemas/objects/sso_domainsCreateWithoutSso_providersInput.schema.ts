import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_domainsCreateWithoutSso_providersInput> = z
  .object({
    id: z.string(),
    domain: z.string(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
  })
  .strict();

export const sso_domainsCreateWithoutSso_providersInputObjectSchema = Schema;
