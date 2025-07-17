import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesCreateManyUsersInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    slug: z.string(),
    domain: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    logo_url: z.string().optional().nullable(),
    banner_url: z.string().optional().nullable(),
    whatsapp_number: z.string().optional().nullable(),
    instagram_url: z.string().optional().nullable(),
    theme_color: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
  })
  .strict();

export const storesCreateManyUsersInputObjectSchema = Schema;
