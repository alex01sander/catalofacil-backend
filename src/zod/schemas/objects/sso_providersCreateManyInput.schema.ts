import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersCreateManyInput> = z
  .object({
    id: z.string(),
    resource_id: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
  })
  .strict();

export const sso_providersCreateManyInputObjectSchema = Schema;
