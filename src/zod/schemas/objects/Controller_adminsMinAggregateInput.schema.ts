import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Controller_adminsMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    email: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
  })
  .strict();

export const Controller_adminsMinAggregateInputObjectSchema = Schema;
