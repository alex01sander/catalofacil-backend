import { z } from 'zod';
import { salesCreateManyStoresInputObjectSchema } from './salesCreateManyStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.salesCreateManyStoresInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => salesCreateManyStoresInputObjectSchema),
      z.lazy(() => salesCreateManyStoresInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const salesCreateManyStoresInputEnvelopeObjectSchema = Schema;
