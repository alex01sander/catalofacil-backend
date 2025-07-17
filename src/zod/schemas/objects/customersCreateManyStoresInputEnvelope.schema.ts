import { z } from 'zod';
import { customersCreateManyStoresInputObjectSchema } from './customersCreateManyStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersCreateManyStoresInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => customersCreateManyStoresInputObjectSchema),
      z.lazy(() => customersCreateManyStoresInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const customersCreateManyStoresInputEnvelopeObjectSchema = Schema;
