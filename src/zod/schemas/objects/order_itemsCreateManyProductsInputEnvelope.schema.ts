import { z } from 'zod';
import { order_itemsCreateManyProductsInputObjectSchema } from './order_itemsCreateManyProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsCreateManyProductsInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => order_itemsCreateManyProductsInputObjectSchema),
      z.lazy(() => order_itemsCreateManyProductsInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const order_itemsCreateManyProductsInputEnvelopeObjectSchema = Schema;
