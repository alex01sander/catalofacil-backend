import { z } from 'zod';
import { productsCreateManyCategoriesInputObjectSchema } from './productsCreateManyCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsCreateManyCategoriesInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => productsCreateManyCategoriesInputObjectSchema),
      z.lazy(() => productsCreateManyCategoriesInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const productsCreateManyCategoriesInputEnvelopeObjectSchema = Schema;
