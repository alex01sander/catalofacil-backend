import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.domain_ownersUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    domain: z.string(),
    user_id: z.string(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    domain_type: z.string().optional(),
  })
  .strict();

export const domain_ownersUncheckedCreateInputObjectSchema = Schema;
