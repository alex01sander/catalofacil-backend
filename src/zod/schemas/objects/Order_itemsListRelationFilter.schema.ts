import { z } from 'zod';
import { order_itemsWhereInputObjectSchema } from './order_itemsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Order_itemsListRelationFilter> = z
  .object({
    every: z.lazy(() => order_itemsWhereInputObjectSchema).optional(),
    some: z.lazy(() => order_itemsWhereInputObjectSchema).optional(),
    none: z.lazy(() => order_itemsWhereInputObjectSchema).optional(),
  })
  .strict();

export const Order_itemsListRelationFilterObjectSchema = Schema;
