import { z } from 'zod';
import { order_itemsCreateManyOrdersInputObjectSchema } from './order_itemsCreateManyOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsCreateManyOrdersInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => order_itemsCreateManyOrdersInputObjectSchema),
      z.lazy(() => order_itemsCreateManyOrdersInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const order_itemsCreateManyOrdersInputEnvelopeObjectSchema = Schema;
