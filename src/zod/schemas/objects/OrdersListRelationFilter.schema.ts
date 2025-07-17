import { z } from 'zod';
import { ordersWhereInputObjectSchema } from './ordersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrdersListRelationFilter> = z
  .object({
    every: z.lazy(() => ordersWhereInputObjectSchema).optional(),
    some: z.lazy(() => ordersWhereInputObjectSchema).optional(),
    none: z.lazy(() => ordersWhereInputObjectSchema).optional(),
  })
  .strict();

export const OrdersListRelationFilterObjectSchema = Schema;
