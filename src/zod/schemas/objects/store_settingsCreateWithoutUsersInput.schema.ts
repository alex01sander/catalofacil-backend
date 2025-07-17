import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.store_settingsCreateWithoutUsersInput> = z
  .object({
    id: z.string().optional(),
    store_name: z.string().optional(),
    store_description: z.string().optional().nullable(),
    mobile_logo: z.string().optional().nullable(),
    desktop_banner: z.string().optional().nullable(),
    mobile_banner_color: z.string().optional().nullable(),
    mobile_banner_image: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    store_subtitle: z.string().optional().nullable(),
    instagram_url: z.string().optional().nullable(),
    whatsapp_number: z.string().optional().nullable(),
  })
  .strict();

export const store_settingsCreateWithoutUsersInputObjectSchema = Schema;
