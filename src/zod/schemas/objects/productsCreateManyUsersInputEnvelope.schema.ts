import { z } from 'zod';
import { productsCreateManyUsersInputObjectSchema } from './productsCreateManyUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsCreateManyUsersInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => productsCreateManyUsersInputObjectSchema),
      z.lazy(() => productsCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const productsCreateManyUsersInputEnvelopeObjectSchema = Schema;
