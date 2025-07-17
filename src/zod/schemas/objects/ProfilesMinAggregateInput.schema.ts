import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProfilesMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    email: z.literal(true).optional(),
    full_name: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
  })
  .strict();

export const ProfilesMinAggregateInputObjectSchema = Schema;
