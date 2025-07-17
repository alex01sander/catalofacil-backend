import { z } from 'zod';
import { productsCreateimagesInputObjectSchema } from './productsCreateimagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsCreateManyUsersInput> = z
  .object({
    id: z.string().optional(),
    category_id: z.string().optional().nullable(),
    name: z.string(),
    description: z.string().optional().nullable(),
    price: z.number().optional(),
    stock: z.number().optional(),
    is_active: z.boolean().optional().nullable(),
    image: z.string().optional().nullable(),
    images: z
      .union([
        z.lazy(() => productsCreateimagesInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    store_id: z.string().optional().nullable(),
  })
  .strict();

export const productsCreateManyUsersInputObjectSchema = Schema;
