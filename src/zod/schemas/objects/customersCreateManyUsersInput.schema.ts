import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersCreateManyUsersInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    store_id: z.string().optional().nullable(),
  })
  .strict();

export const customersCreateManyUsersInputObjectSchema = Schema;
