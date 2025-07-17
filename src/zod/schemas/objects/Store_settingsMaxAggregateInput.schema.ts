import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Store_settingsMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    store_name: z.literal(true).optional(),
    store_description: z.literal(true).optional(),
    mobile_logo: z.literal(true).optional(),
    desktop_banner: z.literal(true).optional(),
    mobile_banner_color: z.literal(true).optional(),
    mobile_banner_image: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    store_subtitle: z.literal(true).optional(),
    instagram_url: z.literal(true).optional(),
    whatsapp_number: z.literal(true).optional(),
  })
  .strict();

export const Store_settingsMaxAggregateInputObjectSchema = Schema;
