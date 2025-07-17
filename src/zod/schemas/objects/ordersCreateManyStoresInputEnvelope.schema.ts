import { z } from 'zod';
import { ordersCreateManyStoresInputObjectSchema } from './ordersCreateManyStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersCreateManyStoresInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ordersCreateManyStoresInputObjectSchema),
      z.lazy(() => ordersCreateManyStoresInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ordersCreateManyStoresInputEnvelopeObjectSchema = Schema;
