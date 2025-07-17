import { z } from 'zod';
import { ProductCreateManyDomainInputObjectSchema } from './ProductCreateManyDomainInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateManyDomainInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ProductCreateManyDomainInputObjectSchema),
      z.lazy(() => ProductCreateManyDomainInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ProductCreateManyDomainInputEnvelopeObjectSchema = Schema;
