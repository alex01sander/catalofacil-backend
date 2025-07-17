import { z } from 'zod';
import { productsCreateManyStoresInputObjectSchema } from './productsCreateManyStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsCreateManyStoresInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => productsCreateManyStoresInputObjectSchema),
      z.lazy(() => productsCreateManyStoresInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const productsCreateManyStoresInputEnvelopeObjectSchema = Schema;
