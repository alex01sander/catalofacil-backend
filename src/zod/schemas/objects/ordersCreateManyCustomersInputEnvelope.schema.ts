import { z } from 'zod';
import { ordersCreateManyCustomersInputObjectSchema } from './ordersCreateManyCustomersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersCreateManyCustomersInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ordersCreateManyCustomersInputObjectSchema),
      z.lazy(() => ordersCreateManyCustomersInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ordersCreateManyCustomersInputEnvelopeObjectSchema = Schema;
