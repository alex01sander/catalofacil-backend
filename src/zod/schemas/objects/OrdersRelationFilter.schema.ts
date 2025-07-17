import { z } from 'zod';
import { ordersWhereInputObjectSchema } from './ordersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrdersRelationFilter> = z
  .object({
    is: z
      .lazy(() => ordersWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ordersWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const OrdersRelationFilterObjectSchema = Schema;
