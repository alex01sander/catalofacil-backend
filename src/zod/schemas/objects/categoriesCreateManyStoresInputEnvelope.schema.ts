import { z } from 'zod';
import { categoriesCreateManyStoresInputObjectSchema } from './categoriesCreateManyStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesCreateManyStoresInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => categoriesCreateManyStoresInputObjectSchema),
      z.lazy(() => categoriesCreateManyStoresInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const categoriesCreateManyStoresInputEnvelopeObjectSchema = Schema;
