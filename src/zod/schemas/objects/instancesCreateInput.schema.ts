import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.instancesCreateInput> = z
  .object({
    id: z.string(),
    uuid: z.string().optional().nullable(),
    raw_base_config: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
  })
  .strict();

export const instancesCreateInputObjectSchema = Schema;
