import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoresMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    slug: z.literal(true).optional(),
    domain: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    description: z.literal(true).optional(),
    logo_url: z.literal(true).optional(),
    banner_url: z.literal(true).optional(),
    whatsapp_number: z.literal(true).optional(),
    instagram_url: z.literal(true).optional(),
    theme_color: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
  })
  .strict();

export const StoresMaxAggregateInputObjectSchema = Schema;
