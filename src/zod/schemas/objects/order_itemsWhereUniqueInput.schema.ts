import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const order_itemsWhereUniqueInputObjectSchema = Schema;
